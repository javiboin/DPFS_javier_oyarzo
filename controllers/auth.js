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
        const { firstName, lastName, email, password, confirmPassword, image } = req.body
        // Validar password
        if (req.body.password !== '' && req.body.confirmPassword !== ''){
            if (req.body.password !== req.body.confirmPassword){
                return res.send('Las contraseñas no son iguales')
            }
        } 

        const newUser = {
            id: users.data.length +1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            category: 'Cliente',
            image: req.body.image 
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