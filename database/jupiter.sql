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
   goods_id int not null
   AUTO_INCREMENT,
   
   name                 varchar
   (32) not null,
   start_time date not null,
   end_time date not null,
   address                varchar
   (32) not null,
   website              varchar
   (1024) not null,
   goods_type           tinyint,
   primary key
   (goods_id)
);

   /*==============================================================*/
   /* Table: goodsDetail                                           */
   /*==============================================================*/
   create table goodsDetail
   (
      detail_id int not null
      AUTO_INCREMENT,
   goods_id             int,
   price                float not null,
   surplus              int not null,
   time          varchar
      (32) not null,
   ticket_type          varchar
      (32) not null,
   primary key
      (detail_id)
);

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

