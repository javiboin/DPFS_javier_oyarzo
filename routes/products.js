const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/product-detail', function(req, res, next) {
  res.render('products/productDetail', { title: 'Detalle de productos' });
});

router.get('/product-cart', function(req, res, next) {
  res.render('products/productCart', { title: 'Carrito de Compras' });
});

router.get('/create-products', function(req, res, next) {
  res.render('products/create-products', { title: 'Alta de Productos' });
});

router.get('/read-products', function(req, res, next) {
  res.render('products/read-products', { title: 'Ver Productos' });
});

router.get('/update-products', function(req, res, next) {
  res.render('products/update-products', { title: 'Modificar Producto' });
});

router.get('/delete-product', function(req, res, next) {
  res.send('ELIMINAR PRODUCTO');
});

module.exports = router;
