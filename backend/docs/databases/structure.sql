-- CREAR LA BASE DE DATOS
CREATE DATABASE soundcity_db;
USE soundcity_db;

-- CREACIÓN DE TABLAS --
-- ROL DE USUARIOS
CREATE TABLE user_role (
	user_role_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    name VARCHAR(100) NULL
);

-- USUARIOS
CREATE TABLE user (
	user_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    firstname VARCHAR (50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    image VARCHAR(500) NULL,
    user_role_id INT NULL
);

-- ESTADO DEL CARRITO DE COMPRAS
CREATE TABLE status (
	status_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    name VARCHAR(50) NULL
);

-- CARRITO DE COMPRAS
CREATE TABLE cart (
	cart_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    shipping_address VARCHAR(250) NULL,
    date_start TIMESTAMP default current_timestamp NOT NULL,
    date_end DATETIME NULL,
    total_purchase DECIMAL(10,2) NOT NULL,
    user_id INT NOT NULL,
    status_id INT NULL
);

-- DETALLE DE CARRITO DE COMPRAS
CREATE TABLE cart_detail (
	cart_detail_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL
);

-- ELIMINAR TABLAS DE CARRITO DE COMPRAS Y SU DETALLE
DROP TABLE cart;
DROP TABLE cart_detail;

-- ACTUALIZAR TABLAS DE CARRITO DE COMPRAS Y SU DETALLE

-- CARRITO DE COMPRAS
CREATE TABLE cart (
	cart_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    total_purchase DECIMAL(10,2) NOT NULL,
    user_id INT NOT NULL
);

-- DETALLE DE CARRITO DE COMPRAS
CREATE TABLE cart_detail (
	cart_detail_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL
);

-- ORDENES DE COMPRA
CREATE TABLE order (
	order_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    shipping_address VARCHAR(250) NULL,
    date_start TIMESTAMP default current_timestamp NOT NULL,
    date_end DATETIME NULL,
    total_purchase DECIMAL(10,2) NOT NULL,
    user_id INT NOT NULL,
    status_id INT NULL
);

-- DETALLE DE ORDENES DE COMPRA
CREATE TABLE order_detail (
	order_detail_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL
);

-- PRODUCTOS
CREATE TABLE product (
	product_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    name VARCHAR(150),
    brand_id INT NULL,
    description VARCHAR(5000),
    image VARCHAR(500),
    subcategory_id INT,
    price DECIMAL(10,2),
    price_cash DECIMAL(10,2),
    price_installment_count INT,
    price_installment DECIMAL(10,2) NULL
);

-- MARCAS
CREATE TABLE brand (
	brand_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    name VARCHAR(100) NULL
);

-- CATEGORÍA
CREATE TABLE category (
	category_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    name VARCHAR(150) NULL
);

-- SUBCATEGORÍA
CREATE TABLE subcategory (
	subcategory_id INT NOT NULL auto_increment PRIMARY KEY,
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    name VARCHAR(150) NULL,
    category_id INT NULL
);

-- RELACIONES

-- USUARIO
ALTER TABLE user
ADD CONSTRAINT fk_user_user_role
FOREIGN KEY (user_role_id)
REFERENCES user_role(user_role_id);

-- CARRITO DE COMPRAS
ALTER TABLE cart
ADD CONSTRAINT fk_cart_user
FOREIGN KEY (user_id) 
REFERENCES user(user_id);

-- DETALLE CARRITO DE COMPRAS
ALTER TABLE cart_detail
ADD CONSTRAINT fk_cart_detail_cart
FOREIGN KEY (cart_id) 
REFERENCES cart(cart_id);

ALTER TABLE cart_detail
ADD CONSTRAINT fk_cart_detail_product
FOREIGN KEY (product_id) 
REFERENCES product(product_id);

-- ORDENES DE COMPRAS
ALTER TABLE order
ADD CONSTRAINT fk_order_user
FOREIGN KEY (user_id) 
REFERENCES user(user_id);

ALTER TABLE order
ADD CONSTRAINT fk_order_status
FOREIGN KEY (status_id) 
REFERENCES status(status_id);

-- DETALLE ORDENES DE COMPRAS
ALTER TABLE order_detail
ADD CONSTRAINT fk_order_detail_order
FOREIGN KEY (order_id) 
REFERENCES order(order_id);

ALTER TABLE order_detail
ADD CONSTRAINT fk_order_detail_product
FOREIGN KEY (product_id) 
REFERENCES product(product_id);

-- PRODUCTOS
ALTER TABLE product
ADD CONSTRAINT fk_product_brand
FOREIGN KEY (brand_id) 
REFERENCES brand(brand_id);

ALTER TABLE product
ADD CONSTRAINT fk_product_subcategory
FOREIGN KEY (subcategory_id) 
REFERENCES subcategory(subcategory_id);

-- SUBCATEGORÍAS
ALTER TABLE subcategory
ADD CONSTRAINT fk_subcategory_category
FOREIGN KEY (category_id) 
REFERENCES category(category_id);