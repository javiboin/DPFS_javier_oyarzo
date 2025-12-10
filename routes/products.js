const express = require('express');
const router = express.Router();
const productController = require("../controllers/products")

router.get('/read-products', productController.index_admin);

router.get('/product-detail/:id', productController.show);

router.get('/:id', productController.edit);

router.post('/update/:id', productController.update);

router.get('/create-products', function(req, res, next) {
  res.render('products/create-products', { title: 'Alta de Productos' });
});

router.post('/delete-product/:id', productController.destroy);

router.get('/product-cart', function(req, res, next) {
  res.render('products/productCart', { title: 'Carrito de Compras' });
});


module.exports = router;
