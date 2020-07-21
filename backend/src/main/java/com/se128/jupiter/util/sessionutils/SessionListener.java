package com.se128.jupiter.util.sessionutils;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import com.se128.jupiter.service.GoodsService;
import com.se128.jupiter.util.logutils.LogUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

@Component
public class SessionListener implements HttpSessionListener{
    @Autowired
    private GoodsService goodsService;

    @Override
    public void sessionCreated(HttpSessionEvent event){
        HttpSession session = event.getSession();
        // System.out.println("Session:" + session.hashCode());
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent event){
        HttpSession session = event.getSession();
        //String login_id = (String) session.getAttribute("userId");
        goodsService.saveViewCounter();
        LogUtil.info("Session destroyed!");
    }

}
