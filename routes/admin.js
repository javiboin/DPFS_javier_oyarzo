var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/admin', { title: 'Panel de Administración' });
});

router.get('/create-products', function(req, res, next) {
  res.render('admin/products/create-products', { title: 'Alta de Productos' });
});

router.get('/read-products', function(req, res, next) {
  res.render('admin/products/read-products', { title: 'Ver Productos' });
});

router.get('/update-products', function(req, res, next) {
  res.render('admin/products/update-products', { title: 'Modificar Producto' });
});



router.get('/create-users', function(req, res, next) {
  res.render('admin/users/create-users', { title: 'Alta de Usuarios' });
});

router.get('/read-users', function(req, res, next) {
  res.render('admin/users/read-users', { title: 'Ver Usuarios' });
});

router.get('/update-users', function(req, res, next) {
  res.render('admin/users/update-users', { title: 'Modificar Usuario' });
});

module.exports = router;
