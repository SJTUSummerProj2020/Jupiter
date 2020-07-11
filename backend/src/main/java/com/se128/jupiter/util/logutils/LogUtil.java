package com.se128.jupiter.util.logutils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LogUtil {
    private static final Logger logger = LogManager.getLogger(LogManager.ROOT_LOGGER_NAME);

    //输出级别：ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < OFF
    public static void trace(String msg) {
        logger.trace(msg);
    }

    public static void debug(String msg){
        logger.debug(msg);
    }

    public static void info(String msg){
        logger.info(msg);
    }

    public static void warn(String msg){
        logger.warn(msg);
    }

    public static void error(String msg){
        logger.error(msg);
    }

    public static void fatal(String msg){
        logger.fatal(msg);
    }
}

