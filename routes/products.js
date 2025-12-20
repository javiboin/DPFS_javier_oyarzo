const express = require('express');
const router = express.Router();
const productController = require("../controllers/products")

router.get('/product-detail/:id', productController.show);
router.get('/new-product', productController.create);
router.post('/create', productController.store);
router.get('/edit/:id', productController.edit);
router.put('/update/:id', productController.update);
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);

router.get('/product-cart', function(req, res, next) {
  res.render('products/productCart', { title: 'Carrito de Compras' });
});

module.exports = router;