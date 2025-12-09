const express = require('express');
const router = express.Router();
const productController = require("../controllers/products")

router.get('/read-products', productController.index_admin);

router.get('/product-detail/:id', productController.show);

router.get('/product-cart', function(req, res, next) {
  res.render('products/productCart', { title: 'Carrito de Compras' });
});

router.get('/create-products', function(req, res, next) {
  res.render('products/create-products', { title: 'Alta de Productos' });
});

router.get('/update-products', function(req, res, next) {
  res.render('products/update-products', { title: 'Modificar Producto' });
});

router.get('/delete-product', function(req, res, next) {
  res.send('ELIMINAR PRODUCTO');
});

module.exports = router;
