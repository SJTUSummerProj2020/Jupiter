//package com.se128.jupiter.util.security;
//
//import com.se128.jupiter.dao.UserDao;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//
//@Component
//public class JupiterUserDetailService implements UserDetailsService {
//
//    private final UserDao userDao;
//
//    @Autowired
//    public JupiterUserDetailService(UserDao userDao) {
//        this.userDao = userDao;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
//        com.se128.jupiter.entity.User user = userDao.getUserByUsername(username);
//        String pwd = user.getPassword();
//
//        if(pwd == null){
//            throw new UsernameNotFoundException(String.format("User with the username %s doesn't exist",username));
//        }
//
//        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(user.getUserType().toString());
//
//        return new User(username,pwd,authorities);
//    }
//}
