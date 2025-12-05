var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Inicio de Sesión' });
});

router.get('/register', function(req, res, next) {
  res.render('users/register', { title: 'Registro' });
});

router.get('/recovery-user', function(req, res, next) {
  res.render('users/recovery-user', { title: 'Recuperar contraseña' });
});

router.get('/account', function(req, res, next) {
  res.render('users/account', { title: 'Mi cuenta' });
});

router.get('/edit-user', function(req, res, next) {
  res.render('users/edit-user', { title: 'Modificar mis datos' });
});

module.exports = router;
