const users = require("../data/users");

const searchUser = (id) => {
    return products.data.find(p => p.id === id);
}

const userController = {
    show: (req, res, next) => {
        const id = parent(req.params.id);
        const user = searchUser(id);

        if (!user){
            return res.status(404).render('not-found');
        }


        res.render('users/profile', { 
            title: 'Mi cuenta', 
            user 
        }); 
    },
    editUser: (req, res, next) => {
        res.render('users/edit-user', { title: 'Modificar mis datos' });
    },
    updateUser: (req, res, next) => {
        res.send('guardar cambios');
    },
    delete: (req, res, next) => {
        res.send('Entrar a la vista de eliminar cuenta');
    },
    destroy: (req, res, next) => {
        res.send('Eliminar Usuario');
    }
}

module.exports = userController;