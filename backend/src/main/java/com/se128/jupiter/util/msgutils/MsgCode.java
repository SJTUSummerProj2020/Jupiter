package com.se128.jupiter.util.msgutils;

public enum MsgCode {
    SUCCESS(MsgUtil.SUCCESS, MsgUtil.SUCCESS_MSG),
    ERROR(MsgUtil.ERROR, MsgUtil.ERROR_MSG),
    DATA_SUCCESS(MsgUtil.SUCCESS, MsgUtil.DATA_SUCCESS_MSG),
    ADD_SUCCESS(MsgUtil.SUCCESS, MsgUtil.ADD_SUCCESS_MSG),
    DELETE_SUCCESS(MsgUtil.SUCCESS, MsgUtil.DELETE_SUCCESS_MSG),
    ADD_ERROR(MsgUtil.ERROR, MsgUtil.ADD_ERR_MSG),
    DATA_ERROR(MsgUtil.ERROR, MsgUtil.DATA_ERR_MSG),
    EDIT_SUCCESS(MsgUtil.SUCCESS, MsgUtil.EDIT_SUCCESS_MSG),
    EDIT_ERROR(MsgUtil.ERROR, MsgUtil.EDIT_ERR_MSG),
    DELETE_ERROR(MsgUtil.ERROR, MsgUtil.DELETE_ERR_MSG),
    LOGIN_USER_ERROR(MsgUtil.LOGIN_USER_ERROR, MsgUtil.LOGIN_USER_ERROR_MSG),
    NOT_LOGGED_IN_ERROR(MsgUtil.NOT_LOGGED_IN_ERROR, MsgUtil.NOT_LOGGED_IN_ERROR_MSG),
    REGISTER_USER_ERROR(MsgUtil.REGISTER_USER_ERROR, MsgUtil.REGISTER_USER_ERROR_MSG),
    NOT_AVAILABLE(MsgUtil.NOT_LOGGED_IN_ERROR, MsgUtil.NOT_AVAILABLE_MSG);
    private final int status;
    private final String msg;

    public int getStatus() {
        return status;
    }

    public String getMsg() {
        return msg;
    }

    MsgCode(int status, String msg) {
        this.status = status;
        this.msg = msg;
    }
}
