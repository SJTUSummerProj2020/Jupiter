/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2020/7/7 14:27:06                            */
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
   goods_id             int not null,
   surplus              int,
   name                 varchar(32) not null,
   address              varchar(32) not null,
   website              varchar(1024) not null,
   goods_type           tinyint,
   primary key (goods_id)
);

/*==============================================================*/
/* Table: goodsDetail                                           */
/*==============================================================*/
create table goodsDetail
(
   detail_id            int not null,
   goods_id             int,
   price                float not null,
   time                 time not null,
   sessions             varchar(32) not null,
   ticket_type          tinyint not null,
   primary key (detail_id)
);

/*==============================================================*/
/* Table: orderList                                             */
/*==============================================================*/
create table orderList
(
   order_id             int,
   user_id              int,
   detail_id            int,
   source_id            int,
   number               int,
   price                float,
   time                 time
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   user_id              int not null,
   user_name            varchar(32) not null,
   password             varchar(32) not null,
   phone                varchar(11) not null,
   user_type            tinyint not null,
   primary key (user_id)
);

alter table goodsDetail add constraint FK_Reference_3 foreign key (goods_id)
      references goods (goods_id) on delete restrict on update restrict;

alter table orderList add constraint FK_Reference_2 foreign key (detail_id)
      references goodsDetail (detail_id) on delete restrict on update restrict;

alter table orderList add constraint FK_Reference_4 foreign key (user_id)
      references user (user_id) on delete restrict on update restrict;

