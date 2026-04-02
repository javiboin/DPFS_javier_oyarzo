const userServices = require('../services/userServices');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const db = require('../db/models');

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

                // --- MERGE SESSION CART TO DB CART ---
                if (req.session.cart && req.session.cart.length > 0) {
                    let [cart] = await db.Cart.findOrCreate({
                        where: { userId: user.userId },
                        defaults: { userId: user.userId, totalPurchase: 0 }
                    });

                    for (const item of req.session.cart) {
                        let detail = await db.CartDetail.findOne({
                            where: { cartId: cart.cartId, productId: item.productId }
                        });
                        
                        const product = await db.Product.findByPk(item.productId);
                        if (!product) continue;

                        if (detail) {
                            detail.quantity += item.quantity;
                            detail.price = product.price;
                            await detail.save();
                        } else {
                            await db.CartDetail.create({
                                cartId: cart.cartId,
                                productId: item.productId,
                                quantity: item.quantity,
                                price: product.price
                            });
                        }
                    }
                    req.session.cart = []; // clear session cart
                }
                // --- END MERGE ---

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
                userRoleId: parseInt(2),
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