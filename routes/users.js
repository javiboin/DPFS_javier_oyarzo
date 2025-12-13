var express = require('express');
var router = express.Router();

const userController = require('../controllers/users');
const authController = require('../controllers/auth');
const adminUsersController = require('../controllers/adminUsers');

// Admin
router.get('/list-users', adminUsersController.index); 
router.get('/create-user', adminUsersController.create); 
router.post('/create-user', adminUsersController.store);
router.get('/update-user', adminUsersController.edit); 
router.put('/update-user', adminUsersController.update); 
router.get('/delete-user', adminUsersController.delete); 
router.delete('/delete-user', adminUsersController.destroy); 


// Usuarios
router.get('/profile/:id', userController.show); 
router.get('/edit-user/:id', userController.editUser); 
router.put('/edit-user/:id', userController.updateUser);
router.get('/delete-profile/:id', userController.delete); 
router.delete('/delete-profile/:id', userController.destroy);


// Autenticación
router.get('/login', authController.login);  
router.post('/login', authController.access); 
router.post('/logout', authController.logout); 
router.get('/register', authController.signup); 
router.post('/register', authController.register); 
router.get('/forgot', authController.forgot); 
router.post('/forgot-sent', authController.forgotSent);

module.exports = router;
