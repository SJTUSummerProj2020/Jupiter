/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2020/7/6 17:08:46                            */
/*==============================================================*/


drop table if exists item;

drop table if exists orderList;

drop table if exists user;

/*==============================================================*/
/* Table: item                                                  */
/*==============================================================*/
create table item
(
   itemId               int not null,
   name                 varchar(1024),
   place                varchar(1024),
   website              varchar(1024),
   primary key (itemId)
);

/*==============================================================*/
/* Table: orderList                                             */
/*==============================================================*/
create table orderList
(
   itemId               int not null,
   userId               int not null,
   orderId              int not null,
   price                float,
   time                 time,
   sourseWebsite        varchar(1024),
   primary key (itemId, userId)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   userId               int not null,
   username             varchar(1024),
   password             varchar(1024),
   phone                varchar(1024),
   userType             int,
   primary key (userId)
);

alter table orderList add constraint FK_orderList foreign key (itemId)
      references item (itemId) on delete restrict on update restrict;

alter table orderList add constraint FK_orderList2 foreign key (userId)
      references user (userId) on delete restrict on update restrict;

