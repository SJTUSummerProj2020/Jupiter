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

def get_cookies(url):
    values = {'loginId': '18721569162', 'password2': '12345678qwe', 'keepLogin':'true'}
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
    
def get_page(url):
    headers = {'User-Agent':'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'}
    request = urllib.request.Request(url, headers=headers)
    content = urllib.request.urlopen(request, timeout=10).read()
    return content

if __name__ == "__main__":
    url = 'https://www.damai.cn/'
    content = get_page(url)
    print(content)
    # request = urllib.request.Request("https://www.damai.cn/", headers=headers)
    # request.add_header("Connection","keep-alive")
    # content = urllib.request.urlopen(request, timeout=10).read()
    # print(content.decode("utf-8"))