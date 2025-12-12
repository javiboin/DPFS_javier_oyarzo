const users = require("../data/users");

const authController = {
    login: (req, res, next) => {
        res.render('users/login', { title: 'Inicio de Sesión' });
    },
    access: (req, res, next) => {
        res.send('Login');
    },
    logout: (req, res, next) => {
        res.send('Deslogueate!');
    },
    signup: (req, res, next) => {
        res.render('users/register', { title: 'Registro' });
    },
    register: (req, res, next) => {
        res.send('Register');
    },
    forgot: (req, res, next) => {
        res.render('users/recovery-user', { title: 'Recuperar contraseña' });
    },
    forgotSent: (req, res, next) => {
        res.send('Recuperar contraseña');
    }
}

module.exports = authController;