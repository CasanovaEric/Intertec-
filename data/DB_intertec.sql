
DROP DATABASE IF EXISTS intertec_db;
/*CREATE DB FOR INTERTECT*/
CREATE DATABASE intertec_db;
/*DB USE*/
USE intertec_db;
/*DROP TABLE USERS_INTERTEC*/
DROP TABLE IF EXISTS users_intertec;
/*TABLE FOR USERS*/
 create table users_intertec(
     id_users int(10) auto_increment primary key,
     firstName varchar(100) not null,
     lastName varchar(100) not null,
     userName varchar(100) not null unique key,
     email varchar(100) not null unique key,
     dateOfBirth date not null,
     addres varchar(100) not null,
     zipCode int(20) not null,
     image_users varchar(255) not null,
     password_users varchar(256) not null,
     passwordConfirm varchar(256) not null,
     rol_users varchar(30) not null
     );

/* DROP TABLE PRODUCTS_INTERTEC*/
DROP TABLE IF EXISTS `products_intertec`
/*CREATE TABLE PRODUCTS*/
create table products_intertec (
  id_products int(10) not null auto_increment primary key,
  name_products varchar(255) not null,
  price decimal(5, 1) not null,
  image_products varchar(255) not null,
  users_id int(10) not null,
  constraint fk_users_id   
  foreign key (users_id) references users_intertec(id_users)
  on delete cascade 
  on update cascade
) ENGINE = InnoDB;
 
/*DROP TABLE ATRIBUTES*/
DROP TABLE IF EXISTS atribute_products_intertec
/*CREATE TABLE ATRIBUTES_PRODUCTS_INTERTEC*/
create table atributes_products_intertec (
    id int(10) not null auto_increment primary key,
    id_products int(10) not null,
    names_atributes varchar(255) NOT NULL,
    values_atributes varchar(255) NOT NULL,
    constraint fk_id_products
    foreign key (id_products) REFERENCES products_intertec(id_products)
    on delete cascade
    on update cascade
) ENGINE=InnoDB;



