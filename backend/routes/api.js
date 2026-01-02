const express = require('express');
const router = express.Router();
const apiProductsController = require('../controllers/api/products');
const apiUsersController = require('../controllers/api/users');

router.get('/', (req, res) => {
    res.json({ message: 'API de Sound City Instrumentos' });
});

/* RUTAS RELACIONADAS AL RECURSO USUARIOS */
router.get('/users', apiUsersController.index);
router.get('/users/last-user', apiUsersController.showLastUser);
router.get('/users/:id', apiUsersController.show);

/* RUTAS RELACIONADAS AL RECURSO PRODUCTOS */
router.get('/products', apiProductsController.index);
router.get('/products/by-category', apiProductsController.showByCategory);
router.get('/products/by-subcategory', apiProductsController.showBySubcategory);
router.get('/products/brands', apiProductsController.showBrands);
router.get('/products/last-product', apiProductsController.showLastProduct);
router.get('/products/:id', apiProductsController.show);

module.exports = router;