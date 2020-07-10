# -*- coding:utf-8 -*-
from bs4 import BeautifulSoup
import urllib.request
import urllib.parse
import urllib.error
import urllib
import http.cookiejar
import re
import sys
import string
import threading
import queue
import os
import re
import pickle
import time
import json
from pymysql import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait


def get_cookies(url):
    values = {'loginId': '18721569162', 'password2': 'xxx', 'keepLogin': 'true'}
    postdata = urllib.parse.urlencode(values).encode()
    user_agent = r'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'
    headers = {'User-Agent': user_agent}

    cookie_filename = 'cookie.txt'
    cookie = http.cookiejar.LWPCookieJar(cookie_filename)
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)

    request = urllib.request.Request(url, postdata, headers)
    request.add_header("Connection", "keep-alive")

    try:
        response = opener.open(request)
    except urllib.error.URLError as e:
        print(e.reason)

    cookie.save(ignore_discard=True, ignore_expires=True)
    for item in cookie:
        print(item.name + ':' + item.value)


def get_page(url, browser):
    browser.get(url)
    rules = re.compile('.*search\\.damai\\.cn.*')
    # 向下拖动至底端
    if rules.match(str(browser.current_url)):
        js = "var q=document.documentElement.scrollTop=10000"
        browser.execute_script(js)
        time.sleep(0.25)
        browser.execute_script(js)
        time.sleep(0.25)
    time.sleep(0.5)
    content = browser.page_source
    return content


def get_mainpage_links(page, content):
    links = []
    rules = re.compile('.*search\\.damai\\.cn.*')
    soup = BeautifulSoup(content, features='html.parser')
    for i in soup.findAll('div', {'class': 'head'}):
        currurl = str(i.a.get('href', ''))
        modifiedurl = urllib.parse.urljoin(page, currurl)
        if not rules.match(str(modifiedurl)):
            continue
        if urllib.parse.urlparse(modifiedurl).scheme not in ('http', 'https'):
            continue
        links.append(modifiedurl)

        # print(modifiedurl)
    return links


def rollpage(browser):
    next_btn = browser.find_element_by_xpath('//button[@class="btn-next"]')
    is_disabled = next_btn.get_attribute('disabled')

    if is_disabled is None:
        next_btn.click()
        time.sleep(0.5)
        return True
    else:
        return False


def get_searchpage_links(page, content):
    links = []
    rules = re.compile('.*detail\\.damai\\.cn.*')
    soup = BeautifulSoup(content, features='html.parser')
    for i in soup.findAll('div', {'class': 'items'}):
        currurl = str(i.a.get('href', ''))
        modifiedurl = urllib.parse.urljoin(page, currurl)
        if not rules.match(str(modifiedurl)):
            continue
        if urllib.parse.urlparse(modifiedurl).scheme not in ('http', 'https'):
            continue
        links.append(modifiedurl)

        # print(modifiedurl)
    return links


# soup经过soup解析 返回该页面上同一场次的所有票务信息
def get_ticket_info(soup):
    # 演出时间
    perform_time = soup.find('div', {'class': 'perform__order__select perform__order__select__performs'})
    if perform_time is None:
        perform_time_content = 'Unknown'
    else:
        perform_time_content = str(
            perform_time.contents[2].div.find('div', {'class': 'select_right_list_item active'}).span.find(
                text=True).strip())
    # 票种类和价钱
    tickets = []
    tickets_container = None
    for i in soup.findAll('div', {'class': 'perform__order__select'}):
        if (str(i.contents[0].get_text()) == '票档'):
            tickets_container = i
    if tickets_container is not None:
        for i in tickets_container.contents[2].findAll('div', {'class': 'sku_item'}):
            price = str(i.find(text=True).strip())
            ticket_status_text = i.span
            if ticket_status_text is not None:
                ticket_status = str(ticket_status_text.get_text()).strip().replace('\n', '')
            else:
                ticket_status = 'None'
            obj = {
                'price': price,
                'status': ticket_status
            }
            tickets.append(obj)
    return {
        'time': perform_time_content,
        'price': tickets
    }


def analysis_detailpage(page, content, browser):
    global data
    soup = BeautifulSoup(content, features='html.parser')
    # 图片
    image = soup.find('img', {'class': 'poster'})
    if image is None:
        image_url = 'None'
    else:
        image_url = str(image.get('src', ''))
    # 标题
    title = soup.find('div', {'class': 'title'})
    if title is None:
        title_content = 'None'
    else:
        title_content = title.contents[2].get_text()
    # 标题时间
    title_time = soup.find('div', {'class': 'time'})
    title_time_content = str(title_time.get_text())
    # 演出地点
    place = str(soup.find('div', {'class': 'addr'}).get_text())
    # 组装演出信息
    date = split_time(title_time_content)  # 标题时间拆分成start&end
    raw_data = {
        'name': title_content,
        'image': image_url,
        'start_date': date[0],
        'end_date': date[1],
        'address': place,
        'website': str(page),
        'goods_type': performance_type,
        'tickets': []
    }
    # 轮番遍历所有场次 并获得每种场次的票务信息
    flag = True  # 标记这是否是第一个场次 Y: True  N: False
    try:
        father = browser.find_element_by_xpath('//div[@class="select_left" and contains(text(), "场次")]/../div[2]/div')
    except:  # 遇到演出取消
        if dataLock.acquire():
            data.append(raw_data)
            dataLock.release()
        return

    for i in father.find_elements_by_xpath('./div'):
        if flag:
            ticket_obj = get_ticket_info(soup)
            raw_data['tickets'].append(ticket_obj)
            flag = False
        else:
            try:
                i.click()
                time.sleep(0.15)
            except:
                btn = browser.find_element_by_xpath('//div[@class="button" and contains(text(), "知道了")]')
                btn.click()
                time.sleep(0.1)
                i.click()
                time.sleep(0.15)
            content = browser.page_source
            soup = BeautifulSoup(content, features='html.parser')
            ticket_obj = get_ticket_info(soup)
            raw_data['tickets'].append(ticket_obj)

    # json_data = json.dumps(raw_data)
    if dataLock.acquire():
        data.append(raw_data)
        dataLock.release()


def split_time(time_str):
    rule = re.compile(r'[0-9]{4}\.[0-9]{2}\.[0-9]{2}')
    rule1 = re.compile(r'-[0-9]{2}\.[0-9]{2}')
    start_date = '0000-00-00'
    end_date = start_date
    m = rule.search(time_str)
    m1 = rule1.search(time_str)
    if m:
        start_date = str(m.group(0)).replace('.', '-')
        if m1 is None:
            end_date = start_date
        else:
            end_date = str(m1.group(0).replace('.', '-'))
            end_date = start_date[:4] + end_date
    return [start_date, end_date]


def split_price(price_str):
    rule = re.compile(r'[0-9]+\.?[0-9]*')
    m = rule.search(price_str)
    if m:
        return float(m.group(0))
    else:
        return 0


def save_data():
    conn = connect(
        host='localhost',
        port=3306,
        user='root',
        password='lhn684258.',
        database='jupiter',
        charset='utf8'
    )
    cur = conn.cursor()
    find_max = 'select max(goods_id) from goods'
    for i in range(len(data)):
        goods_insert_sql = 'insert into goods VALUES(null, \"' + \
                           data[i]['name'] + '\", \"' + \
                           data[i]['start_date'] + '\", \"' + \
                           data[i]['end_date'] + '\", \"' + \
                           data[i]['address'] + '\", \"' + \
                           data[i]['website'] + '\", ' + \
                           str(data[i]['goods_type']) + ', \"' + \
                           data[i]['image'] + '\")'
        try:
            cur.execute(goods_insert_sql)
            cur.execute(find_max)
            max_goodsid = int(cur.fetchone()[0])
        except:
            print(goods_insert_sql)
            continue

        tickets = data[i]['tickets']
        for ticket_index in range(len(tickets)):
            price = tickets[ticket_index]['price']
            ticket_time = tickets[ticket_index]['time']

            for price_index in range(len(price)):
                if price[price_index]['status'] == '缺货登记':
                    status = 0  # 缺票
                elif price[price_index]['status'] == '开售提醒':
                    status = 2  # 开售提醒
                else:
                    status = 1  # 有票
                ticket_insert_sql = 'insert into goodsdetail VALUES(null, ' + \
                                    str(max_goodsid) + ', ' + \
                                    str(split_price(price[price_index]['price'])) + ', ' + \
                                    str(status) + ', \"' + \
                                    ticket_time + '\", \"' + \
                                    price[price_index]['price'] + '\")'
                try:
                    cur.execute(ticket_insert_sql)
                except:
                    print(ticket_insert_sql)
                    continue
    conn.commit()
    cur.close()
    conn.close()


def working(flag, count, n):
    global NUM
    option = webdriver.ChromeOptions()
    option.add_experimental_option('excludeSwitches', ['enable-automation'])
    browser = webdriver.Chrome("C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe", options=option)
    rules = re.compile('.*search\\.damai\\.cn.*')

    while flag:
        # queueLock.acquire()     # 加锁
        page = q.get()
        # queueLock.release()     # 放锁
        if page == '-':  # 填充用的
            count += 1
            if count >= maxpage:
                flag = False
            continue
        if page not in crawled:
            try:
                content = get_page(page, browser)
            except urllib.error.HTTPError:
                continue
            print("I am thread", n, page)
            count += 1
            if count >= maxpage:
                flag = False
            if False:  # 主页
                outlinks = get_mainpage_links(page, content)
                for link in outlinks:
                    q.put(link)
            elif rules.match(str(page)):  # 搜索页
                # queueLock.acquire()         # 加锁
                while True:
                    outlinks = get_searchpage_links(page, content)
                    for link in outlinks:
                        q.put(link)
                    if not rollpage(browser):
                        break
                    js = "var q=document.documentElement.scrollTop=10000"
                    browser.execute_script(js)
                    time.sleep(0.25)
                    browser.execute_script(js)
                    time.sleep(0.25)
                    content = browser.page_source
                for i in range(50):
                    q.put('-')  # 填充用的
                # queueLock.release()         # 放锁
            else:  # 票务详情页
                analysis_detailpage(page, content, browser)

            if varLock.acquire():
                crawled.append(page)
                varLock.release()
    if countLock.acquire():
        NUM = NUM - 1
        countLock.release()
    if NUM == 0:
        save_data()


if __name__ == "__main__":
    flag = True
    count = 0
    maxpage = 10
    NUM = 4
    performance_type = 6  # 演出类型标记
    # seed = 'https://www.damai.cn/'
    # seed = 'https://detail.damai.cn/item.htm?spm=a2oeg.search_category.0.0.57224d15EkqdYm&id=611422891307&clicktitle=%E4%B8%89%E6%9C%88%E8%A1%97%E5%A4%B4%E6%BC%AB%E6%B8%B8%7CDSPS%EF%BC%86%E9%9B%BE%E8%99%B9%E8%81%94%E5%90%88%E5%B7%A1%E6%BC%94%20%E4%B8%8A%E6%B5%B7%E7%AB%99'
    # seed = 'https://detail.damai.cn/item.htm?spm=a2oeg.search_category.0.0.67a24d15JgTiXc&id=622013617460&clicktitle=%E5%BC%80%E5%BF%83%E9%BA%BB%E8%8A%B1%E7%88%86%E7%AC%91%E8%88%9E%E5%8F%B0%E5%89%A7%E3%80%8A%E7%AA%97%E5%89%8D%E4%B8%8D%E6%AD%A2%E6%98%8E%E6%9C%88%E5%85%89%E3%80%8B'
    seed = 'https://search.damai.cn/search.htm?spm=a2oeg.home.category.ditem_7.577723e1Nby1vX&ctl=%E8%88%9E%E8%B9%88%E8%8A%AD%E8%95%BE&order=1&cty='
    varLock = threading.Lock()
    dataLock = threading.Lock()
    countLock = threading.Lock()
    queueLock = threading.Lock()
    q = queue.Queue()
    crawled = []
    threads = []
    data = []  # 存票的各种信息 json
    q.put(seed)

    for i in range(NUM):
        t = threading.Thread(target=working, args=(flag, count, i))
        t.setDaemon(True)
        threads.append(t)

    # start each thread
    mark = True
    for t in threads:
        t.start()
        # while mark:
        #     time.sleep(1)

    # join threads
    for t in threads:
        t.join()
