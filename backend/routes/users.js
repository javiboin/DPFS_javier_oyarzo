const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const requiredAuth = require('../middlewares/requiredAuth');
const userValidations = require('../middlewares/validations/userValidations');

const userController = require('../controllers/users');
const authController = require('../controllers/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const uploads = multer({ storage: storage });

// Usuarios
router.get('/profile/:id',  requiredAuth, userController.show); 
router.get('/edit/:id', requiredAuth, userController.edit); 
router.put('/edit/:id', uploads.single('image'), requiredAuth, userController.update);
router.get('/delete-profile/:id', requiredAuth, userController.delete); 
router.delete('/delete-profile/:id', requiredAuth, userController.destroy);


// Autenticación
router.get('/login', authController.login);  
router.post('/login', userValidations.access, authController.access); 
router.post('/logout', authController.logout); 
router.get('/register', authController.signup); 
router.post('/register', uploads.single('image'), userValidations.register, authController.register); 
router.get('/forgot', authController.forgot); 
router.post('/forgot-sent', authController.forgotSent);

module.exports = router;
