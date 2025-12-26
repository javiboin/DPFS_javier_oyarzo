const userServices = require('../services/userServices');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const authController = {
    login: (req, res, next) => {
        res.render('users/login', { 
            title: 'Inicio de Sesión',
            errors: []
        });
    },
    access: async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map(error => error.msg);
                return res.status(400).render('users/login', { 
                    title: 'Inicio de Sesión',
                    errors: errorMessages,
                });
            };

            const { email, password, rememberMe } = req.body;
            const user = await userServices.searchEmailUser(email);
            const passwordDesencrypted = await userServices.compareHash(password, user.password);

            if (user && passwordDesencrypted){
                req.session.currentUser = { 
                    id: user.userId,
                    firstName: user.firstname,
                    lastName: user.lastname,
                    email: user.email
                }; 

                if (rememberMe === 'on') {
                    req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7;
                    req.session.cookie.httpOnly = true;
                } else {
                    req.session.cookie.expires = false;
                }

                return res.redirect('/');
            } else {
                return res.redirect('/users/login');
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    logout: (req, res, next) => {
        req.session.destroy();
        return res.redirect('/');
    },
    signup: (req, res, next) => {
        res.render('users/register', { 
            title: 'Registro',
            errors: [],
            oldData: {
                email: '',
                firstName: '',
                lastName: ''
            }
        });
    },
    register: async (req, res, next) => {
        try {
            const { firstName, lastName, email, password } = req.body;
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map(error => error.msg);

                if (req.file) {
                    fs.unlinkSync(path.join(__dirname, '../public/images/users', req.file.filename));
                }
                return res.status(400).render('users/register', { 
                    title: 'Registro',
                    errors: errorMessages,
                    oldData: {
                        email: email,
                        firstName: firstName,
                        lastName: lastName
                    }
                });
            };

            const passwordEncrypted = await userServices.createHash(password);
            const newUser = {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: passwordEncrypted,
                category: parseInt(2),
                image: req.file.filename 
            };

            await userServices.createUser(newUser)
                .then (() => { return res.redirect('/users/login') })
                .catch (error => { return res.status(500).json({ error: error.message }) });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    forgot: (req, res, next) => {
        res.render('users/recovery-user', { title: 'Recuperar contraseña' });
    },
    forgotSent: (req, res, next) => {
        res.send('Recuperar contraseña');
    }
}

module.exports = authController;