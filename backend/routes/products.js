const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productController = require("../controllers/products");
const searchController = require("../controllers/search");
const productValidations = require('../middlewares/validations/productValidations');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const uploads = multer({ storage: storage });

router.get('/product-detail/:id', productController.show);
router.get('/new-product', productController.create);
router.post('/create', uploads.single('image'), productValidations.save, productController.store);
router.get('/edit/:id', productController.edit);
router.put('/update/:id', uploads.single('image'), productValidations.save, productController.update);
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);

router.get('/product-cart', function(req, res, next) {
  res.render('products/productCart', { title: 'Carrito de Compras' });
});

router.get('/search', searchController.search);

module.exports = router;