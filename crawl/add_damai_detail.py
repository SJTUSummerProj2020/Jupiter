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
    js = "var q=document.documentElement.scrollTop=10000"
    browser.execute_script(js)
    time.sleep(0.4)
    content = browser.page_source
    return content


def get_detail(soup):
    detail = soup.find('div', {'class': 'notice-content'})
    if detail is None:
        return 'None'
    else:
        return str(detail)


def analysis_detailpage(goods, content):
    global data
    goods_id = goods['goods_id']
    page = goods['website']
    soup = BeautifulSoup(content, features='html.parser')

    detail = soup.find('div', {'id': 'detail'})
    if detail is None:
        detail_content = 'None'
    else:
        detail_content = str(detail).replace(u'\xa0', u'').replace('\n', '')

    raw_data = {
        'goods_id': goods_id,
        'detail': detail_content
    }

    if dataLock.acquire():
        data.append(raw_data)
        dataLock.release()


def get_data():
    global q
    conn = connect(
        host='localhost',
        port=3306,
        user='root',
        password='root',
        database='jupiter_update',
        charset='utf8'
    )
    cur = conn.cursor()

    rules = re.compile(r'.*damai.*')
    cur.execute('select goods_id, website from goods')
    results = cur.fetchall()
    for row in results:
        goods_id = row[0]
        website = row[1]
        if not rules.match(str(website)):
            continue
        obj = {
            'goods_id': goods_id,
            'website': website
        }
        q.put(obj)

    conn.commit()
    cur.close()
    conn.close()

    obj = {  # 填充
        'goods_id': -1,
        'website': '-'
    }
    for i in range(50):
        q.put(obj)


def save_data():
    mongo_conn = MongoClient('mongodb://localhost:27017/')
    mongo_conn.jupiter_test.authenticate('root', '123456', mechanism='SCRAM-SHA-1')
    mongo_db = mongo_conn['jupiter']
    collection = mongo_db['goodsdetail']

    for i in range(len(data)):
        try:
            collection.insert_one(document=data[i])
        except:
            print('ERROR IN MongoDB!')
            continue


def working(flag, count, n):
    global NUM
    option = webdriver.ChromeOptions()
    browser = webdriver.Chrome("C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe", options=option)

    while flag:
        goods = q.get()  # page = {'goodid':1, 'website':'https://xxx'}
        if goods['website'] == '-':
            count += 1
            if count >= maxpage:
                flag = False
            continue
        if goods['website'] not in crawled:
            try:
                content = get_page(goods['website'], browser)
            except urllib.error.HTTPError:
                continue
            print('I am thread', n, goods['website'])
            count += 1
            if count >= maxpage:
                flag = False

            analysis_detailpage(goods, content)

            if varLock.acquire():
                crawled.append(goods['website'])
                varLock.release()
    if countLock.acquire():
        NUM = NUM - 1
        countLock.release()
    if NUM == 0:
        save_data()


if __name__ == '__main__':
    flag = True
    count = 0
    maxpage = 544
    NUM = 4
    varLock = threading.Lock()
    dataLock = threading.Lock()
    countLock = threading.Lock()
    q = queue.Queue()
    crawled = []
    threads = []
    data = []  # 演出detail数据

    get_data()

    for i in range(NUM):
        t = threading.Thread(target=working, args=(flag, count, i))
        t.setDaemon(True)
        threads.append(t)

    # start each thread
    mark = True
    for t in threads:
        t.start()

    # join threads
    for t in threads:
        t.join()
