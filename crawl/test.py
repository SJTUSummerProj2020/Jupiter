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
from goto import with_goto
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait

def split_time(time_str):
    rule = re.compile(r'[0-9]{4}\.[0-9]{2}\.[0-9]{2}')
    rule1 = re.compile(r'-[0-9]{2}\.[0-9]{2}')
    m = rule.search(time_str)
    m1 = rule1.search(time_str)
    start_date = str(m.group(0)).replace('.', '-')
    if m1 is None:
        end_date = start_date
    else:
        end_data = str(m1.group(0).replace('-', '').replace('.', '-'))
    return [start_date, end_date]


def split_price(price_str):
    rule = re.compile(r'[0-9]+\.?[0-9]*')
    m = rule.search(price_str)
    if m:
        return float(m.group(0))
    else:
        return 0

if __name__ == '__main__':
    option = webdriver.ChromeOptions()
    option.add_experimental_option('excludeSwitches', ['enable-automation'])
    browser = webdriver.Chrome("C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe", options=option)

    browser.get('https://detail.damai.cn/item.htm?spm=a2oeg.search_category.0.0.52cf4d15jnUK7P&id=611057434615&clicktitle=%E9%99%88%E5%A5%95%E8%BF%85Fear%20and%20Dreams%E4%B8%96%E7%95%8C%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A-%E4%B8%8A%E6%B5%B7%E7%AB%99')
    time.sleep(2)
    father = browser.find_element_by_xpath('//div[@class="select_left" and contains(text(), "场次")]/../div[2]/div')
    for i in father.find_elements_by_xpath('./div'):
        i.click()
        span = i.find_element_by_xpath('./span')
        print(span.text)
        time.sleep(2)