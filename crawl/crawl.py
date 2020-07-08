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
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait

def get_cookies(url):
    values = {'loginId': '18721569162', 'password2': 'xxx', 'keepLogin':'true'}
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

def analysis_detailpage(page, content):
    global data
    soup = BeautifulSoup(content, features='html.parser')
    # 图片
    image = soup.find('img', {'class': 'poster'})
    image_url = str(image.get('src', ''))
    # 标题
    title = soup.find('div', {'class': 'title'})
    title_content = title.contents[2].get_text()
    # 标题时间
    title_time = soup.find('div', {'class': 'time'})
    title_time_content = str(title_time.get_text())
    # 演出时间
    perform_time = soup.find('div', {'class': 'perform__order__select perform__order__select__performs'})
    perform_time_content = str(perform_time.contents[2].div.div.span.find(text=True).strip())
    tickets_status_text = perform_time.contents[2].div.div.span.span
    ticket_status = 'None'
    if tickets_status_text is not None:
        ticket_status = str(tickets_status_text.get_text()).strip().replace('\n','')
    # 演出地点
    place = str(soup.find('div', {'class': 'addr'}).get_text())
    # 票种类和价钱
    tickets = []
    for i in soup.findAll('div', {'class': 'perform__order__select'}):
        if (str(i.contents[0].get_text()) == '票档'):
            tickets_container = i
    for i in tickets_container.contents[2].findAll('div', {'class': 'sku_item'}):
        price = str(i.find(text=True).strip())
        tickets.append(price)
    # 组装演出信息
    raw_data = {
        'name': title_content,
        'image': image_url,
        'title_time': title_time_content,
        'address': place,
        'website': str(page),
        'goods_type': performance_type,
        'tickets': [{
            'time': perform_time_content,
            'status': ticket_status,
            'price': tickets
        }]
    }
    # json_data = json.dumps(raw_data)
    data.append(str(raw_data))

    


def save_data():
    file = open('data.txt', 'w')
    for i in range(len(data)):
        file.write(data[i])
        # print(data[i])
    file.close()

def working(flag, count, n):
    option = webdriver.ChromeOptions()
    option.add_experimental_option('excludeSwitches', ['enable-automation'])
    browser = webdriver.Chrome("C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe", options=option)
    rules = re.compile('.*search\\.damai\\.cn.*')

    while flag:
        page = q.get()
        if page == '-':
            performance_type = performance_type + 1
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
            if (page == seed):              # 主页
                outlinks = get_mainpage_links(page, content)
                for link in outlinks:
                    q.put(link)
            elif rules.match(str(page)):    # 搜索页
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
                q.put("-")                  # 类型划分标记
            else:                           # 票务详情页
                analysis_detailpage(page, content)

            if varLock.acquire():
                crawled.append(page)
                varLock.release()
    save_data()
    


if __name__ == "__main__":
    flag = True
    count = 0
    maxpage = 20
    NUM = 1
    performance_type = 0        # 演出类型标记
    seed = 'https://www.damai.cn/'
    # seed = 'https://detail.damai.cn/item.htm?spm=a2oeg.search_category.0.0.57224d15EkqdYm&id=611422891307&clicktitle=%E4%B8%89%E6%9C%88%E8%A1%97%E5%A4%B4%E6%BC%AB%E6%B8%B8%7CDSPS%EF%BC%86%E9%9B%BE%E8%99%B9%E8%81%94%E5%90%88%E5%B7%A1%E6%BC%94%20%E4%B8%8A%E6%B5%B7%E7%AB%99'
    # seed = 'https://detail.damai.cn/item.htm?spm=a2oeg.search_category.0.0.67a24d15JgTiXc&id=622013617460&clicktitle=%E5%BC%80%E5%BF%83%E9%BA%BB%E8%8A%B1%E7%88%86%E7%AC%91%E8%88%9E%E5%8F%B0%E5%89%A7%E3%80%8A%E7%AA%97%E5%89%8D%E4%B8%8D%E6%AD%A2%E6%98%8E%E6%9C%88%E5%85%89%E3%80%8B'
    varLock = threading.Lock()
    q = queue.Queue()
    crawled = []
    threads = []
    data = []       # 存票的各种信息 json
    q.put(seed)

    for i in range(NUM):
        t = threading.Thread(target=working, args=(flag, count, i))
        t.setDaemon(True)
        threads.append(t)

    # start each thread
    for t in threads:
        t.start()
    
    # join threads
    for t in threads:
        t.join()