-- CREAR LA BASE DE DATOS
CREATE DATABASE soundcity_db;
USE soundcity_db;

-- CREACIÓN DE TABLAS --
-- ROL DE USUARIOS
CREATE TABLE user_role (
	user_role_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    name varchar(100) null
);

-- USUARIOS
CREATE TABLE user (
	user_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    firstname varchar (50) not null,
    lastname varchar(50) not null,
    email varchar(100) not null,
    password varchar(100) not null,
    image varchar(500) null,
    user_role_id int null,
    foreign key (user_role_id) references user_role(user_role_id)
);

-- ESTADO DEL CARRITO DE COMPRAS
CREATE TABLE status (
	status_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    name varchar(50) null
);

-- CARRITO DE COMPRAS
CREATE TABLE cart (
	cart_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    shipping_address varchar(250) null,
    date_start timestamp default current_timestamp not null,
    date_end datetime null,
    total_purchase decimal(10,2) not null,
    user_id int not null,
    status_id int null,
    foreign key (user_id) references user(user_id),
    foreign key (status_id) references status(status_id)
);

-- DETALLE DE CARRITO DE COMPRAS
CREATE TABLE cart_detail (
	cart_detail_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    cart_id int not null,
    product_id int not null,
    quantity int not null DEFAULT 1,
    price decimal(10,2),
    foreign key (cart_id) references cart(cart_id),
    foreign key (product_id) references product(product_id)
);

-- PRODUCTOS
CREATE TABLE product (
	product_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    name varchar(150),
    brand_id int null,
    description varchar(500),
    image varchar(500),
    subcategory_id int,
    price decimal(10,2),
    price_cash decimal(10,2),
    price_installment_count int,
    price_installment decimal(10,2),
    foreign key (brand_id) references brand(brand_id),
    foreign key (subcategory_id) references subcategory(subcategory_id)
);

alter table product modify column description varchar(5000);

-- MARCAS
CREATE TABLE brand (
	brand_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    name varchar(100) null
);

-- CATEGORÍA
CREATE TABLE category (
	category_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    name varchar(150) null
);

-- SUBCATEGORÍA
CREATE TABLE subcategory (
	subcategory_id INT NOT NULL auto_increment primary key,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    name varchar(150) null,
    category_id int null,
    foreign key (category_id) references category(category_id)
);