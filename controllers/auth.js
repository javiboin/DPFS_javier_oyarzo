const users = require("../data/users");
const bcryptjs = require('bcryptjs');

const createHash = async (passwordToConvert) => {
  const newHash = await bcryptjs.hash(passwordToConvert, 8);
  return newHash;
};

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
    register: async (req, res, next) => {
        const { firstName, lastName, email, password, confirmPassword } = req.body

        if (password !== '' && confirmPassword !== ''){
            if (password !== confirmPassword){
                return res.send('Las contraseñas no son iguales')
            }
        } 

        const passwordEncrypted = await createHash(password);

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