package com.se128.jupiter.interceptor;

import com.se128.jupiter.util.msgutils.Msg;
import com.se128.jupiter.util.msgutils.MsgCode;
import com.se128.jupiter.util.msgutils.MsgUtil;
import com.se128.jupiter.util.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SessionValidateInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object obj) {
        //return true;
        boolean status = SessionUtil.checkAuth();
        if(!status){
            System.out.println("Session Failed");
            Msg msg = MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
            sendJsonBack(response, msg);
            return false;
        }
        else {
            System.out.println("Session Success");
            return true;
        }
    }

    private void sendJsonBack(HttpServletResponse response, Msg msg) {
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json; charset=utf-8");
        try (PrintWriter writer = response.getWriter()) {
            writer.print(JSONObject.fromObject(msg));
        } catch (IOException e) {
            System.out.println("send json back error");
        }
    }

}
