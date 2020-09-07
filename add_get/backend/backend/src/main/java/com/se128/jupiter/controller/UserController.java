package com.se128.jupiter.controller;

import com.se128.jupiter.entity.Order;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.service.UserService;
import com.se128.jupiter.util.constant.Constant;
import com.se128.jupiter.util.msgutils.Msg;
import com.se128.jupiter.util.msgutils.MsgCode;
import com.se128.jupiter.util.msgutils.MsgUtil;
import com.se128.jupiter.util.sessionutils.SessionUtil;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    private final UserService userService;
    private static final Logger logger = LogManager.getLogger(LogManager.ROOT_LOGGER_NAME);

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/register")
    public Msg register(@RequestBody User user) {
        logger.info("register");
        user.setUserType(Constant.Customer);
        user.setBuy0(0);
        user.setBuy1(0);
        user.setBuy2(0);
        user.setBuy3(0);
        User user1 = userService.addUser(user);

        if (user1 != null) {
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.REGISTER_SUCCESS_MSG);
        } else {
            return MsgUtil.makeMsg(MsgCode.REGISTER_USER_ERROR);
        }
    }

    @RequestMapping("/changeUserStatusByUserId")
    public Msg changeUserStatusByUserId(@RequestBody Map<String, String> params) {
        Integer userId = Integer.valueOf(params.get(Constant.USER_ID));
        logger.info("changeUserStatusByUserId = " + userId);
        User user = userService.changeUserStatusByUserId(userId);
        if (user != null) {
            return MsgUtil.makeMsg(MsgCode.EDIT_SUCCESS);
        } else {
            return MsgUtil.makeMsg(MsgCode.EDIT_ERROR);
        }
    }

    @RequestMapping("/editUser")
    public Msg editUser(@RequestBody User user) {
        logger.info("editUser");
        User user1 = userService.editUser(user);
        JSONObject data = JSONObject.fromObject(user1);
        return MsgUtil.makeMsg(MsgCode.EDIT_SUCCESS, data);
    }

    @RequestMapping("/getUserById")
    public Msg getUserById(@RequestBody Map<String, String> params) {

        Integer userId = Integer.valueOf(params.get(Constant.USER_ID));
        logger.info("getUserById = " + userId);
        User user = userService.getUserByUserId(userId);
        JSONObject data = JSONObject.fromObject(user);
        return MsgUtil.makeMsg(MsgCode.SUCCESS, data);
    }

    @RequestMapping("/login")
    public Msg login(@RequestBody Map<String, String> params) {
        logger.info("login");
        String username = params.get(Constant.USERNAME);
        String password = params.get(Constant.PASSWORD);
        User user = userService.getUserByUsernameAndPassword(username, password);
        if (user == null) {
            return MsgUtil.makeMsg(MsgCode.ERROR, MsgUtil.LOGIN_USER_ERROR_MSG);
        }
        if (user.getUserType() == -1) {
            return MsgUtil.makeMsg(MsgCode.ERROR, MsgUtil.BAN_USER_ERROR_MSG);
        }
        JSONObject obj = new JSONObject();
        obj.put(Constant.USER_ID, user.getUserId());
        obj.put(Constant.USERNAME, user.getUsername());
        obj.put(Constant.USER_TYPE, user.getUserType());
        SessionUtil.setSession(obj);

        JSONObject data = JSONObject.fromObject(user);
        data.remove(Constant.PASSWORD);
        data.remove(Constant.ORDERS);
        data.remove(Constant.PHONE);
        data.remove(Constant.ORDERS);

        return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, data);

    }

    @RequestMapping("/logout")
    public Msg logout() {
        logger.info("logout");
        Boolean status = SessionUtil.removeSession();
        if (status) {
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGOUT_SUCCESS_MSG);
        }
        return MsgUtil.makeMsg(MsgCode.ERROR, MsgUtil.LOGOUT_ERR_MSG);
    }

    @RequestMapping("/checkSession")
    public Msg checkSession() {
        logger.info("checkSession");
        JSONObject auth = SessionUtil.getAuth();

        if (auth == null) {
            return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
        } else {
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, auth);
        }
    }

    @RequestMapping("/getOrdersByUserId")
    public Msg getOrdersByUserId(@RequestBody Map<String, String> params) {
        JSONObject user = SessionUtil.getAuth();
        Integer userId = user.getInt(Constant.USER_ID);
        List<Order> orders = userService.getOrdersByUserId(userId);

        JSONArray orderList = JSONArray.fromObject(orders);
        JSONObject data = new JSONObject();
        data.put("order", orderList);
        return MsgUtil.makeMsg(MsgCode.DATA_SUCCESS, data);
    }

    @RequestMapping("/getAllUsers")
    public Msg getAllUsers() {
        logger.info("getAllUsers");
        List<User> users = userService.getAllUsers();
        JSONObject data = new JSONObject();
        JSONArray orderList = JSONArray.fromObject(users);
        data.put("users", orderList.toString());
        return MsgUtil.makeMsg(MsgCode.DATA_SUCCESS, data);
    }

}
