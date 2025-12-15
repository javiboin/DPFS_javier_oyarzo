const users = require("../data/users");
const bcryptjs = require('bcryptjs');

const createHash = async (passwordToConvert) => {
  const newHash = await bcryptjs.hash(passwordToConvert, 8);
  return newHash;
};

const compareHash = async (password, hashToConvert) => {
    const compare = await bcryptjs.compare(password, hashToConvert);
    return compare;
};

const searchEmailUser = (email) => {
    return users.data.find(u => u.email === email)
}

const authController = {
    login: (req, res, next) => {
        res.render('users/login', { title: 'Inicio de Sesión' });
    },
    access: async (req, res, next) => {
        const { email, password } = req.body;

        const user = searchEmailUser(email);
        
        if (!user) {
            return res.status(404).render('not-found');
        }

        const passwordDesencrypted = await compareHash(password, user.password);

        if (user && passwordDesencrypted){ 
            res.send('login correcto');
        } else {
            res.send('no logueado, contraseña incorrecta');
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