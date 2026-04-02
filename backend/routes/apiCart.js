const express = require('express');
const router = express.Router();
const cartController = require('../controllers/api/cartController');

// Rutas de Carrito (Session y DB fusionado lógicamente en controller)
router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
router.put('/:id', cartController.updateQuantity);
router.delete('/:id', cartController.removeFromCart);

module.exports = router;
