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

module.exports = router;
