from pymysql import *
import string
import re

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
    conn = connect(
        host='localhost',
        port = 3306,
        user='root',
        password='123456',
        database='jupiter',
        charset='utf8'
    )
    cur = conn.cursor()
    sql = 'insert into goods VALUES(null, "test1", "2020-07-29", "2020-07-30", "test4", "test5", 1, "test7")'
    sql1 = 'select max(goods_id) from goods'
    cur.execute(sql)
    cur.execute(sql1)
    print(cur.fetchone()[0])
    conn.commit()
    cur.close()
    conn.close()

    
    # s = '时间：2020.07.25 周六 20:00'
    # tmp = split_time(s)
    # print(tmp)


    # s = '预售票（188.00）'
    # print(split_price(s))


    # data = {
    #     'test' : s
    # }
    # print(data['test'])