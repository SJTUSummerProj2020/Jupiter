package com.se128.jupiter.util.sessionutils;

import com.se128.jupiter.util.constant.Constant;
import net.sf.json.JSONObject;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SessionUtil {

    public static boolean checkAuth() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();

        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession(false);

            if (session != null) {
                Integer userType = (Integer) session.getAttribute(Constant.USER_TYPE);
                return userType != null && userType >= 0;
            }
        }
        return false;
    }

    public static JSONObject getAuth() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        // Session
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession(false);

            if (session != null) {
                JSONObject ret = new JSONObject();
                ret.put(Constant.USER_ID, (Integer) session.getAttribute(Constant.USER_ID));
                ret.put(Constant.USERNAME, (String) session.getAttribute(Constant.USERNAME));
                ret.put(Constant.USER_TYPE, (Integer) session.getAttribute(Constant.USER_TYPE));
                return ret;
            }
        }
        return null;
    }

    public static void setSession(JSONObject data) {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        // Session
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession();
            // 设置session失效时间 单位为秒
            session.setMaxInactiveInterval(5*60);

            for (Object str : data.keySet()) {
                String key = (String) str;
                Object val = data.get(key);
                session.setAttribute(key, val);
            }
        }
    }

    public static Boolean removeSession() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();

        // Session
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession(false);

            if (session != null) {
                session.invalidate();
                return true;
            }
            else
            {
                return false;
            }
        }
        return true;
    }

    public static boolean addCounter(Integer goodsId) {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        // Session
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession(false);

            if (session != null) {
                Integer counter = (Integer) session.getAttribute(goodsId.toString());
                if(counter == null)
                {
                    session.setAttribute(goodsId.toString(),"1");
                }
                else
                {
                    counter = counter+1;
                    session.setAttribute(goodsId.toString(),counter.toString());
                }
                return true;
            }
        }
        return false;
    }
}
