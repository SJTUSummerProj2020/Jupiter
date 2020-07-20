package com.se128.jupiter.util.msgutils;

import net.sf.json.JSONObject;

public class MsgUtil {

    public static final int SUCCESS = 0;
    public static final int ERROR = -1;
    public static final int LOGIN_USER_ERROR = -100;
    public static final int NOT_LOGGED_IN_ERROR = -101;
    public static final int REGISTER_USER_ERROR = -102;
    public static final int BODY_ERROR = -103;

    public static final String SUCCESS_MSG = "成功！";
    public static final String DATA_SUCCESS_MSG = "获取成功！";
    public static final String LOGIN_SUCCESS_MSG = "登录成功！";
    public static final String EDIT_SUCCESS_MSG = "修改成功！";
    public static final String LOGOUT_SUCCESS_MSG = "登出成功！";
    public static final String ADD_SUCCESS_MSG = "添加成功！";
    public static final String REGISTER_SUCCESS_MSG = "注册成功";
    public static final String DELETE_SUCCESS_MSG = "删除成功";
    public static final String BUY_SUCCESS_MSG = "购买成功";
    public static final String LOGOUT_ERR_MSG = "登出异常！";
    public static final String ADD_ERR_MSG = "添加失败！";
    public static final String DATA_ERR_MSG = "获取失败！";
    public static final String ERROR_MSG = "错误！";
    public static final String EDIT_ERR_MSG = "修改失败！";
    public static final String LOGIN_USER_ERROR_MSG = "用户名或密码错误，请重新输入！";
    public static final String REGISTER_USER_ERROR_MSG = "存在相同用户名，请更换用户名";
    public static final String NOT_LOGGED_IN_ERROR_MSG = "登录失效，请重新登录！";
    public static final String DELETE_ERR_MSG = "删除失败";
    public static final String BUY_ERROR_MSG ="购买失败，此票暂时无货" ;
    public static final String BAN_USER_ERROR_MSG = "您的账户已被禁用";
    public static final String NOT_AVAILABLE_MSG = "您的权限不够";


    public static Msg makeMsg(MsgCode code, JSONObject data) {
        return new Msg(code, data);
    }

    public static Msg makeMsg(MsgCode code, String msg, JSONObject data) {
        return new Msg(code, msg, data);
    }

    public static Msg makeMsg(MsgCode code) {
        return new Msg(code);
    }

    public static Msg makeMsg(MsgCode code, String msg) {
        return new Msg(code, msg);
    }

    public static Msg makeMsg(int status, String msg, JSONObject data) {
        return new Msg(status, msg, data);
    }

    public static Msg makeMsg(int status, String msg) {
        return new Msg(status, msg);
    }

}
