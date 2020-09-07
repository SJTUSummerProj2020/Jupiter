package com.se128.jupiter.interceptor;

import com.se128.jupiter.util.constant.Constant;
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

public class AdminValidateInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object obj) {
        JSONObject user = SessionUtil.getAuth();

        if(user != null &&user.getInt(Constant.USER_TYPE)==Constant.ADMIN){
            System.out.println("Admin Success");
            return true;
        }
        else
        {
            System.out.println("Admin Failed");
            Msg msg = MsgUtil.makeMsg(MsgCode.NOT_AVAILABLE);
            sendJsonBack(response, msg);
            return false;
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
