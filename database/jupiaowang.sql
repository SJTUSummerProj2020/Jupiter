drop table if exists `item`;
drop table if exists `user`;
drop table if exists `order`;

create table `item`
(
    itemId int primary key,
    name char,
    place char,
    website char
);

create table user
(
    userId int primary key,
    username char,
    password char,
    phone char,
    userType int
);

create table `order`
(
   orderId int primary key,
   itemId int,
   userId int,
   price float,
   time time,
   sourseSite char
);


alter table `order`
add constraint FK_Reference_1 foreign key
(itemId)
      references item
(itemId)
on
delete restrict on
update restrict;

alter table `order`
add constraint FK_Reference_2 foreign key
(userId)
      references user
(userId)
on
delete restrict on
update restrict;
