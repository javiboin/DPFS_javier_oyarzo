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
        const { firstName, lastName, email, password, confirmPassword } = req.body
        // Validar password
        if (password !== '' && confirmPassword !== ''){
            if (password !== confirmPassword){
                return res.send('Las contraseñas no son iguales')
            }
        } 

        const newUser = {
            id: users.data.length +1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
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