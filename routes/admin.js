var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Panel de Administración' });
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
