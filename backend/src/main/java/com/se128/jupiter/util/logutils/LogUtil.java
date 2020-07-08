package com.se128.jupiter.util.logutils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LogUtil {
    private static final Logger logger = LogManager.getLogger(LogUtil.class.getName());
    public void getHello() {

        logger.trace("我是trace");
        logger.info("我是info信息");
        logger.error("我是error");
        logger.fatal("我是fatal");

        logger.trace("退出程序.");
    }

    public static void main() {
        new LogUtil().getHello();
    }
}
