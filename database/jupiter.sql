/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2020/7/7 13:48:11                            */
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
<<<<<<< HEAD
   goods_id int not null
   AUTO_INCREMENT,
   
   name                 varchar
   (32) not null,
   place                varchar
   (32) not null,
   website              varchar
   (1024) not null,
=======
   goods_id             int not null AUTO_INCREMENT,
   surplus              int,
   name                 varchar(32) not null,
   place                varchar(32) not null,
   website              varchar(1024) not null,
>>>>>>> 3e4467cb550a7eb6d12288d435eef7786d5b4955
   goods_type           tinyint,
   primary key
   (goods_id)
);

<<<<<<< HEAD
   /*==============================================================*/
   /* Table: goodsDetail                                           */
   /*==============================================================*/
   create table goodsDetail
   (
      detail_id int not null
      AUTO_INCREMENT,
            surplus              int not null,
=======
/*==============================================================*/
/* Table: goodsDetail                                           */
/*==============================================================*/
create table goodsDetail
(
   detail_id            int not null AUTO_INCREMENT,
>>>>>>> 3e4467cb550a7eb6d12288d435eef7786d5b4955
   goods_id             int,
   price                float not null,
   time                 time not null,
   sessions             varchar
      (32) not null,
   ticket_type          tinyint not null,
   primary key
      (detail_id)
);

<<<<<<< HEAD
      /*==============================================================*/
      /* Table: orderList                                             */
      /*==============================================================*/
      create table orderList
      (
         order_id int NOT NULL
         AUTO_INCREMENT,
   user_id              int not null,
   detail_id            int not null,
   source_id            int not null,
   number               int not null,
   price                float not null,
   time                 time not null,
   primary key
         (order_id)
);

         /*==============================================================*/
         /* Table: user                                                  */
         /*==============================================================*/
         create table user
         (
            user_id int not null
            AUTO_INCREMENT,
   user_name            varchar
            (32) not null,
   password             varchar
            (32) not null,
   phone                varchar
            (11) not null,
=======
/*==============================================================*/
/* Table: orderList                                             */
/*==============================================================*/
create table orderList
(
   order_id             int NOT NULL AUTO_INCREMENT,
   user_id              int,
   detail_id            int,
   source_id            int,
   number               int,
   price                float,
   time                 time,
   primary key (order_id)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   user_id              int not null AUTO_INCREMENT,
   user_name            varchar(32) not null,
   password             varchar(32) not null,
   phone                varchar(11) not null,
>>>>>>> 3e4467cb550a7eb6d12288d435eef7786d5b4955
   user_type            tinyint not null,
   primary key
            (user_id)
);

            alter table goodsDetail add constraint FK_Reference_3 foreign key (goods_id)
      references goods (goods_id)
            on delete restrict on
            update restrict;

            alter table orderList add constraint FK_Reference_2 foreign key (detail_id)
      references goodsDetail (detail_id)
            on delete restrict on
            update restrict;

            alter table orderList add constraint FK_Reference_4 foreign key (user_id)
      references user (user_id)
            on delete restrict on
            update restrict;

