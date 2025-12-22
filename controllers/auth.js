const users = require("../data/users");
const bcryptjs = require('bcryptjs');
const userServices = require('../services/userServices');

const createHash = async (passwordToConvert) => {
  const newHash = await bcryptjs.hash(passwordToConvert, 8);
  return newHash;
};

const authController = {
    login: (req, res, next) => {
        res.render('users/login', { title: 'Inicio de Sesión' });
    },
    access: async (req, res, next) => {
        try {
            const { email, password, rememberMe } = req.body;
            const user = userServices.searchEmailUser(email);
            
            if (!user) {
                return res.redirect('/users/login');
            }

            const passwordDesencrypted = await userServices.compareHash(password, user.password);

            if (user && passwordDesencrypted){
                req.session.currentUser = { 
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }; 

                if (rememberMe) {
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
        res.send('Deslogueate!');
    },
    signup: (req, res, next) => {
        res.render('users/register', { title: 'Registro' });
    },
    register: async (req, res, next) => {
        const { firstName, lastName, email, password, confirmPassword } = req.body

        if (password !== '' && confirmPassword !== ''){
            if (password !== confirmPassword){
                return res.send('Las contraseñas no son iguales')
            }
        } 

        const passwordEncrypted = await userServices.createHash(password);

        const newUser = {
            id: users.data.length +1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordEncrypted,
            category: 'Cliente',
            image: req.file.filename 
        };

        users.data.push(newUser);
        res.redirect('/users/login');
    },
    forgot: (req, res, next) => {
        res.render('users/recovery-user', { title: 'Recuperar contraseña' });
    },
    forgotSent: (req, res, next) => {
        res.send('Recuperar contraseña');
    }
}

module.exports = authController;