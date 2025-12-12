const adminUsersController = {
    index: (req, res, next) => {
        res.render('users/list-users', { title: 'Ver Usuarios' });
    },
    create: (req, res, next) => {
        res.render('users/create-users', { title: 'Alta de Usuarios' });
    },
    store: (req, res, next) => {
        res.send('guardar usuario');
    },
    edit: (req, res, next) => {
      res.render('users/update-users', { title: 'Modificar Usuario' });
    },
    update: (req, res, next) => { 
        res.send('guardar cambios');
    },
    delete: (req, res, next) => {
        res.send('Entrar a la vista de eliminar usuario');
    },
    destroy: (req, res, next) => { 
        res.send('ELIMINAR USUARIO');
    }
}

module.exports = adminUsersController;