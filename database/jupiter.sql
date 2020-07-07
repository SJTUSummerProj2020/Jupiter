/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2020/7/7 10:10:36                            */
/*==============================================================*/


drop table if exists goods;

drop table if exists goodsDetail;

drop table if exists orderList;

drop table if exists user;

/*==============================================================*/
/* Table: goods                                                 */
/*==============================================================*/
create table goods
(
   goodsId int not null,
   name varchar(32) not null,
   place varchar(32) not null,
   website varchar(1024) not null,
   goodsType tinyint,
   primary key (goodsId)
);

/*==============================================================*/
/* Table: goodsDetail                                           */
/*==============================================================*/
create table goodsDetail
(
   detailId int not null,
   goodsId int,
   price float not null,
   time time not null,
   sessions varchar(32) not null,
   TicketType tinyint not null,
   primary key (detailId)
);

/*==============================================================*/
/* Table: orderList                                             */
/*==============================================================*/
create table orderList
(
   orderId int,
   userId int,
   detailId int,
   sourceId int,
   number int,
   price float,
   time time
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   userId int not null,
   username varchar(32) not null,
   password varchar(32) not null,
   phone varchar(11) not null,
   userType tinyint not null,
   primary key (userId)
);

alter table goodsDetail add constraint FK_Reference_3 foreign key (goodsId)
      references goods (goodsId)
on delete restrict on
update restrict;

alter table orderList add constraint FK_Reference_2 foreign key (detailId)
      references goodsDetail (detailId)
on delete restrict on
update restrict;

alter table orderList add constraint FK_Reference_4 foreign key (userId)
      references user (userId)
on delete restrict on
update restrict;

