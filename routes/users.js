const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer({dest: 'public/images/users/'});

const requiredAuth = require('../middlewares/requiredAuth')

const userController = require('../controllers/users');
const authController = require('../controllers/auth');

// Usuarios
router.get('/profile/:id',  requiredAuth, userController.show); 
router.get('/edit/:id', requiredAuth, userController.edit); 
router.put('/edit-user/:id', requiredAuth, userController.updateUser);
router.get('/delete-profile/:id', requiredAuth, userController.delete); 
router.delete('/delete-profile/:id', requiredAuth, userController.destroy);


// Autenticación
router.get('/login', authController.login);  
router.post('/login', authController.access); 
router.post('/logout', authController.logout); 
router.get('/register', authController.signup); 
router.post('/register', uploads.single('image'), authController.register); 
router.get('/forgot', authController.forgot); 
router.post('/forgot-sent', authController.forgotSent);

module.exports = router;
