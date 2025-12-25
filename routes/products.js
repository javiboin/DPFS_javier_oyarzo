const express = require('express');
const router = express.Router();
const productController = require("../controllers/products");
const searchController = require("../controllers/search");
const productValidations = require('../middlewares/validations/productValidations');

router.get('/product-detail/:id', productController.show);
router.get('/new-product', productController.create);
router.post('/create', productValidations.save, productController.store);
router.get('/edit/:id', productController.edit);
router.put('/update/:id', productValidations.save, productController.update);
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);

router.get('/product-cart', function(req, res, next) {
  res.render('products/productCart', { title: 'Carrito de Compras' });
});

router.get('/search', searchController.search);

module.exports = router;