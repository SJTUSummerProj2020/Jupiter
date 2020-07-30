//package com.se128.jupiter.util.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//
//@Configuration
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
////    private final JupiterUserDetailService jupiterUserDetailService;
////
////
////    @Autowired
////    public SecurityConfig(JupiterUserDetailService jupiterUserDetailService) {
////        this.jupiterUserDetailService = jupiterUserDetailService;
////    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//       http.csrf().disable();
//
//       http.authorizeRequests().anyRequest().authenticated();
//
//       http.formLogin().usernameParameter("username").passwordParameter("password").loginProcessingUrl("/login");
//
//       http.formLogin().successHandler(new LoginSuccessHandler());
//    }
//
////    @Autowired
////    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
////        auth.userDetailsService(jupiterUserDetailService);
////
////    }
//}
