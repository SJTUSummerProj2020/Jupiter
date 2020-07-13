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
from pymongo import *
from bson.objectid import ObjectId
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait


def get_page(url, browser):
    browser.get(url)
    rules = re.compile(r'.*/list/.*')
    # 向下拖动至底端
    if rules.match(str(browser.current_url)):
        js = "var q=document.documentElement.scrollTop=10000"
        browser.execute_script(js)
        time.sleep(0.2)
        browser.execute_script(js)
        time.sleep(0.2)
    time.sleep(0.5)
    content = browser.page_source
    return content


def rollpage(browser):
    try:
        next_btn = browser.find_element_by_xpath('//div[@class="icon icon-page-next"]')
    except:
        next_btn = None     # 到了最后一页

    if next_btn is not None:
        next_btn.click()
        time.sleep(0.4)
        return True
    else:
        return False


def get_searchpage_links(page, content):
    links = []
    rules = re.compile(r'.*/content/.*')
    soup = BeautifulSoup(content, features='html.parser')
    for i in soup.findAll('a', {'class': 'show-items sa_entrance'}):
        currurl = str(i.get('href', ''))
        modifiedurl = urllib.parse.urljoin(page, currurl)
        if not rules.match(str(modifiedurl)):
            continue
        if urllib.parse.urlparse(modifiedurl).scheme not in ('http', 'https'):
            continue
        links.append(modifiedurl)
    return links


def split_time_addr(title_ele_content):
    rule1 = re.compile(r'[0-9]{4}.[0-9]{2}.[0-9]{2}-[0-9]{4}.[0-9]{2}.[0-9]{2}')
    rule2 = re.compile(r'[0-9]{4}.[0-9]{2}.[0-9]{2}')
    rule3 = re.compile(r'[0-9]{2}:[0-9]{2}')
    str_list = title_ele_content.split()
    str_len = len(str_list)
    title_time_content = 'None'
    place = 'None'
    if str_list[str_len - 1] == '查看座位图':
        del(str_list[str_len - 1])
        str_len -= 1
    if rule1.match(str_list[0]):
        place = ''
        title_time_content = str_list[0]
        for i in range(str_len - 1):
            place = place + str_list[i + 1] + ' '
    elif rule2.match(str_list[0]):
        place = ''
        if rule3.match(str_list[1]):
            title_time_content = str_list[0] + ' ' + str_list[1]
            for i in range(str_len - 2):
                place = place + str_list[i + 2] + ' '
        else:
            title_time_content = str_list[0]
            for i in range(str_len - 1):
                place = place + str_list[i + 1]
    else:
        title_time_content = 'None'
        place = 'None'
    return [title_time_content, place]


def split_time(time_str):
    rule1 = re.compile(r'-[0-9]{4}\.[0-9]{2}\.[0-9]{2}')
    rule2 = re.compile(r'[0-9]{2}:[0-9]{2}')
    start_date = '0000-00-00'
    end_date = start_date
    if rule1.search(time_str):
        start_date = time_str[:10].replace('.', '-')
        end_date = time_str[11:].replace('.', '-')
    elif rule2.search(time_str):
        start_date = time_str[:10].replace('.', '-')
        end_date = start_date
    return [start_date, end_date]


def split_price(price_str):
    rule = re.compile(r'[0-9]+\.?[0-9]*')
    m = rule.seach(price_str)
    if m:
        return float(m.group(0))
    else:
        return 0


def get_ticket_info(soup):
    # 演出时间
    perform_time = soup.find('div', {'id': 'session-container'})
    if perform_time is None:
        perform_time_content = 'Unknown'
    else:
        perform_time_content = str(perform_time.find('div', {'class': 'normal-list-item list-one active'}).get('data-time'))

    # 票种和价钱
    tickets = []
    tickets_container = soup.find('div', {'id': 'sessionPar-container'})
    if tickets_container is not None:
        for i in tickets_container.findAll('div'):
            price = str(i.get('data-price'))
            seatname = str(i.get('data-seatname'))
            comments = str(i.get('data-comments'))
            if seatname == 'None':
                seatname = ''
            if comments == 'None':
                comments = ''
            ticket_text = seatname + ' ' + comments
            ticket_status = i.i
            if ticket_status is None:
                ticket_status_text = 'None'
            else:
                ticket_status_text = ticket_status.get_text()
            obj = {
                'price': price,         # 真实价格 不用parse
                'label': ticket_text,   # div上实际显示的字符
                'status': ticket_status_text    # 暂缺 or None
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
    image = soup.find('div', {'class': 'show-poster'})
    if image is None:
        image_url = 'None'
    else:
        image_url = str(image.a.img.get('src', ''))
    # 标题
    title = soup.find('div', {'class': 'show-title'})
    if title is None:
        title_content = 'None'
    else:
        title_content = str(title.span.get_text())
    # 标题时间 & 地点
    title_ele = soup.find('div', {'class': 'show-address'})
    if title_ele is None:
        title_ele_content = 'None'
        title_time_content = 'None'
        place = 'None'
    else:
        title_ele_content = str(title_ele.get_text()).replace('\n', '').strip()
        time_addr = split_time_addr(title_ele_content)
        title_time_content = time_addr[0]
        place = time_addr[1]
    # 演出详细信息
    detail = soup.find('div', {'class': 'center-content'})
    if detail is None:
        detail_content = 'None'
    else:
        detail_content = str(detail)
    # 组装演出信息
    date = split_time(title_time_content)
    raw_data = {
        'name': title_content,
        'image': image_url,
        'start_date': date[0],
        'end_date': date[1],
        'address': place,
        'website': str(page),
        'goods_type': performance_type,
        'detail': detail_content,
        'tickets': []
    }

    # 遍历所有场次 获得每种场次票务信息
    try:
        father = browser.find_element_by_xpath('//div[@id="session-container"]')
    except:     # 遇到演出取消
        if dataLock.acquire():
            data.append(raw_data)
            dataLock.release()
        print('演出取消！')
        return
    
    for i in father.find_elements_by_xpath('./ul/li/div'):
        try:
            i.click()
            time.sleep(0.15)
        except:
            print('CLICK ERROR!')
        content = browser.page_source
        soup = BeautifulSoup(content, features='html.parser')
        ticket_obj = get_ticket_info(soup)
        raw_data['tickets'].append(ticket_obj)

    if dataLock.acquire():
        data.append(raw_data)
        dataLock.release()    


def save_data():
    mysql_conn = connect(
        host='localhost',
        port=3306,
        user='root',
        password='123456',
        database='jupiter_test',
        charset='utf8'
    )
    mysql_cur = mysql_conn.cursor()

    mongo_conn = MongoClient('mongodb://localhost:27017/')
    mongo_conn.jupiter_test.authenticate('root', '123456', mechanism='SCRAM-SHA-1')
    mongo_db = mongo_conn['jupiter_test']
    collection = mongo_db['goodsdetail']

    find_max = 'select max(goods_id) from goods'
    for i in range(len(data)):
        goods_insert_sql = 'insert into goods VALUES(null, \"' + \
                           data[i]['name'] + '\", \"' + \
                           data[i]['start_date'] + '\", \"' + \
                           data[i]['end_date'] + '\", \"' + \
                           data[i]['address'] + '\", \"' + \
                           data[i]['website'] + '\", ' + \
                           str(data[i]['goods_type']) + ', \"' + \
                           data[i]['image'] + '\", 0, 0)'
        try:
            mysql_cur.execute(goods_insert_sql)
            mysql_cur.execute(find_max)
            max_goodsid = int(mysql_cur.fetchone()[0])
        except:
            print(goods_insert_sql)
            continue

        document = {'id': max_goodsid, 'detail': data[i]['detail']}
        try:
            collection.insert_one(document=document)
        except:
            print('ERROR IN MongoDB!')
            continue

        tickets = data[i]['tickets']
        for ticket_index in range(len(tickets)):
            price = tickets[ticket_index]['price']
            ticket_time = tickets[ticket_index]['time']

            for price_index in range(len(price)):
                if price[price_index]['status'] == '暂缺':
                    status = 0  # 缺票
                else:
                    status = 1  # 有票
                ticket_insert_sql = 'insert into goodsdetail VALUES(null, ' + \
                                    str(max_goodsid) + ', ' + \
                                    str(price[price_index]['price']) + ', ' + \
                                    str(status) + ', \"' + \
                                    ticket_time + '\", \"' + \
                                    price[price_index]['label'] + '\")'
                try:
                    mysql_cur.execute(ticket_insert_sql)
                except:
                    print(ticket_insert_sql)
                    continue
    mysql_conn.commit()
    mysql_cur.close()
    mysql_conn.commit()
                    


def do_nothing():
    return 


def working(flag, count, n):
    global NUM
    option = webdriver.ChromeOptions()
    browser = webdriver.Chrome("C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe", options=option)
    rules = re.compile(r'.*/list/.*')

    while flag:
        page = q.get()
        if page == '-':
            count += 1
            if count >= maxpage:
                flag = False
            continue
        if page not in crawled:
            try:
                content = get_page(page, browser)
            except urllib.error.HTTPError:
                continue
            print('I am thread', n, page)
            count += 1
            if count >= maxpage:
                flag = False
            if False:       # 主页
                outlinks = []
                for link in outlinks:
                    q.put(link)
            elif rules.match(str(page)):  # 搜索页
                while True:
                    outlinks = get_searchpage_links(page, content)
                    for link in outlinks:
                        q.put(link)
                    if not rollpage(browser):
                        break
                    js = "var q=document.documentElement.scrollTop=10000"
                    browser.execute_script(js)
                    time.sleep(0.2)
                    browser.execute_script(js)
                    time.sleep(0.2)
                    content = browser.page_source
                for i in range(50):
                    q.put('-')  # 填充用的
            else:               # 票务详情页
                analysis_detailpage(page, content, browser)
                # do_nothing()
            
            if varLock.acquire():
                crawled.append(page)
                varLock.release()
    if countLock.acquire():
        NUM = NUM - 1
        countLock.release()
    if NUM == 0:
        save_data()


if __name__ == '__main__':
    flag = True
    count = 0
    maxpage = 8
    NUM = 1
    performance_type = 0  # 演出类型
    seed = 'https://www.moretickets.com/list/3101-concerts/hottest'
    varLock = threading.Lock()
    dataLock = threading.Lock()
    countLock = threading.Lock()
    q = queue.Queue()
    crawled = []
    threads = []
    data = []  # 演出json数据
    q.put(seed)
    
    for i in range(NUM):
        t = threading.Thread(target = working, args = (flag, count, i))
        t.setDaemon(True)
        threads.append(t)

    # start each thread
    mark = True
    for t in threads:
        t.start()
    
    # join threads
    for t in threads:
        t.join()

    