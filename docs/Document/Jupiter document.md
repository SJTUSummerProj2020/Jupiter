# Jupiter

![build](https://img.shields.io/badge/build-pass-brightgreen.svg?style=plastic)![build](https://img.shields.io/badge/coverage-100%-brightgreen.svg?style=plastic)![build](https://img.shields.io/badge/license-Apache-brightgreen.svg?style=plastic)

[TOC]

## 需求实现

### 功能性需求

<font color="red">检查一下是否所有功能（看下老师的要求以及确保我们都实现了）都写上了</font>

#### 用户

- 注册与登录

- 管理个人信息

- 接受系统推送

- 购买门票

- 查询当前票务信息

- 查询个人订单信息

- 接受门票智能推荐

- 竞拍票务

#### 管理员

- 登录

- 管理票务信息

- 管理用户信息

- 查看统计数据

- 发布竞拍

## 非功能需求

### 数据量

<font color = "red">来一个图或者数据</font>

### 并发性能

以下数据为Jmeter在100并发下测试得到

#### Spring Boot

- 优化后的并发性能能达到较高水平，100线程并发的均值均在100ms以下

![](.\Jupiter document.assets\100线程响应时间图.png)

#### Spring Cloud

- 优化后的并发性能能达到较高水平，100线程并发的均值多在10ms级别

![](.\Jupiter document.assets\响应时间图springcloud.png)
### 测试覆盖率

<font color="red">问诗羿要一个覆盖率图</font>

### 避免单点故障

使用springcloud的熔断器机制，避免一个子系统瘫痪导致的整体瘫痪

## 过程管理

我们利用github进行代码管理<font color="red">扯一些东西然后加一张git workflow 的图</font>

## 测试

### 前端测试

### 后端测试

<font color="red">问诗羿要一个覆盖率图</font>

### 端到端测试

端到端测试使用的测试工具为cypress。Cypress是为现代网络打造的下一代前端测试工具。我们解决了开发人员和QA工程师在测试现代应用程序时面临的关键难点问题。在端到端测试中，我们写了四个测试文件。

Auctionview_.test,js文件主要模拟了用户拍卖的操作，主要涉及到未登录竞拍和登录竞拍两种情况，并且对加价器进行了测试。

Detailpage_test.js主要对详情界面进行测试。模拟用户选择了场次、票档，并测试了数量步进器。同时测试了未登录购买和登陆后购买两种流程。

Homepage_test.js主要测试了用户对主页面的访问，登录和注册操作，并对输入错误密码、注册时两次密码不一致等情况进行了测试。

Useradmin_test.js主要对管理员权限进行测试，主要包括封禁用户和解禁用户。

端到端测试全部是模拟用户的操作，所以需要将前后端全部启动。经过测试，用户的基本功能覆盖到了，但是对于一些极端情况，还不能完全覆盖。

## 安全

### springboot（session+cookie）

springboot的后端采用拦截器的方式对前端请求进行拦截，Authentication部分首先调用login函数，验证前端发送的用户名和密码，若正确，将用户信息存储在session中，后端会在后续Authorization中利用存储在session中的用户信息进行用户权限的判断。

### springcloud (SSO)

springcloud的后端采用拦截器的方式对前端请求进行拦截，所有的请求都会进入Zuul网关，在那里我们设置过滤器来拦截请求。关于后端api可以分成三个部分，分别是无需登录即可访问、需要登录和需要管理员权限。过滤器通过调用sso微服务来完成对用户名和密码的验证，同时生成密钥作为cookie返给前端。密钥和用户信息被sso微服务存储在Redis数据库中，供所有微服务调用。权限的校验放在Zuul的过滤器中。过滤器会结合Redis数据库中的用户信息检验请求是否符合权限，并做出拦截。

## 运维

### 管理员功能

<font color="red">扯一些管理员运营上的功能，如禁用什么的</font>

### 监控

#### springboot

我们采用了Actuator+Prometheus+Grafana的工具链。

通过Actuator将数据暴露给Prometheus,并通过Grafana绘制成图,方便横向对比不同容器的CPU占用量等信息。

![](.\Jupiter document.assets\Snipaste_2020-07-28_12-40-38.png)

#### springcloud

我们利用了skywalking中的探针对系统情况进行检查，同时可利用turbine监控对断路器状况进行检查

![](.\Jupiter document.assets\image-20200906202617534.png)

## Bonus

### 拍卖功能的实现

我们在jupiter中实现了拍卖功能，管理员可以发布拍卖，用户端可以进行拍卖，拍卖价格会实时更新。<font color="red">稍微多扯一点</font>

## 项目架构

<font color="red">问老刘要一张架构图</font>

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>

### 前端架构

​		前端采用了React + Antd，采用组件化的设计思想提高代码的复用率。

#### 页面设计

​		注册页面

![](.\Jupiter document.assets\注册.gif)

​		登录页面

![](.\Jupiter document.assets\登录.gif)

浏览、购买、查看订单

![](.\Jupiter document.assets\浏览 购买 查看订单.gif)

拍卖

![](.\Jupiter document.assets\拍卖.gif)

### 后端架构

​		我们设计并使用了两个后端，一个基于springboot的集成后端以及一个基于springcloud的微服务后端，两个后端向外提供了相同的RESTful API接口，可以进行无缝切换。

#### Spring Boot

##### 实现

此后端基于springboot实现，特点有：

- 采用MVC架构风格
- 使用 ORM 框架来访问数据库
- 使用 IoC在分层结构中注入具体接口的实现类以及其他参数
- 工程中体现出了合理的分层架构，包括表示层、控制层、 服务层、实体层等，始终遵循接口与实现分离原则

##### 安全

安全包括认证（Authentication）和授权（Authorization）。

springboot的后端采用拦截器的方式对前端请求进行拦截，Authentication部分首先调用login函数，验证前端发送的用户名和密码，若正确，将用户信息存储在session中，后端会在后续Authorization中利用存储在session中的用户信息进行用户权限的判断。

##### 部署

我们利用docker将后端部署于ec2中

#### Spring Cloud

##### 实现

我们采用了springcloud的微服务设计框架，设计并实现了由注册中心（eureka-server），用户服务（user-service），商品服务（goods-service），订单服务（order-service），用户中心（user-center），云端配置（config），单点登录中心（sso-server），集群监控（turbine），网关中心（zuul-server）。

- config（8805）： 我们采用云端配置，配置中心由[github](https://github.com/SJTUSummerProj2020/springCloudConfig)托管
- eureka（8801，8802）:  我们采用了双注册中心，一定程度上保证系统的稳定性
- goods-service（8883）：商品服务中心，提供商品相关接口
- order-service（8882：订单服务中心，提供订单相关接口
- user-service（8881）：用户服务中心，提供用户相关接口
- user-center（8884）：用户中心，提供用户与订单混合服务接口
- sso-server（8810）：单点登录中心，提供登录以及授权服务
- turbine（8804）：集群监控，对短路器进行监控
- zuul-server（8080）：向外暴露的网关接口，对请求进行转发

##### 安全

安全包括认证（Authentication）和授权（Authorization）。

springcloud的后端采用拦截器的方式对前端请求进行拦截，所有的请求都会进入Zuul网关，在那里我们设置过滤器来拦截请求。关于后端api可以分成三个部分，分别是无需登录即可访问、需要登录和需要管理员权限。过滤器通过调用sso微服务来完成对用户名和密码的验证，同时生成密钥作为cookie返给前端。密钥和用户信息被sso微服务存储在Redis数据库中，供所有微服务调用。权限的校验放在Zuul的过滤器中。过滤器会结合Redis数据库中的用户信息检验请求是否符合权限，并做出拦截。

### 数据库设计

#### 物理模型

![](.\Jupiter document.assets\数据库物理模型.png)

#### 设计思想

数据库分为五个表，针对两个实体（用户、商品）。其中goods和user是两个实体类，用户分为用户名和昵称，用户可以对昵称进行修改。goodsdetail存放价格、库存等点击详细页面才需要获取的信息。在主页、分类页面不需要获得goodsdetail的数据，加快获得数据的速度。Orderlist表存放订单类，auction表存放拍卖信息，包括拍卖时间、初始价格、当前最高出价等等，关于几乎同时出价的处理在后端实现。

​		
