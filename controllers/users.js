const users = require("../data/users");

const searchUser = (id) => {
    return users.data.find(u => u.id === id);
}

const userController = {
    show: (req, res, next) => {
        const id = parseInt(req.params.id);
        const user = searchUser(id);

        if (!user){
            return res.status(404).render('not-found');
        }

        res.render('users/profile', { 
            title: 'Mi cuenta', 
            nombre: user.firstName,
            apellido: user.lastName,
            email: user.email,
            image: user.image
        }); 
    },
    editUser: (req, res, next) => {
        const id = parseInt(req.params.id);
        const user = searchUser(id);

        if (!user){
            return res.status(404).render('not-found');
        }

        res.render('users/edit-user', { 
            title: 'Modificar mis datos',
            id: user.id,
            nombre: user.firstName,
            apellido: user.lastName,
            email: user.email,
            image: user.image 
        });
    },
    updateUser: (req, res, next) => {
        const id = parseInt(req.params.id);
        const user = searchUser(id);

        if (!user){
            return res.status(404).render('not-found');
        }

        if (req.body.action = 'edit-img') {
            if (req.body.image == ""){
                req.body.image = user.image
                return res.status(200).redirect('/users/profile/1');
            } else {

                const data = {
                    "id": id,
                    "firstName": user.firstName,
                    "lastName": user.lastName,
                    "email": user.email,
                    "password": user.password,
                    "category": user.category,
                    "image": req.body.image
                }

                const indice = users.data.findIndex(p => p.id == id)
                
                if (indice !== -1) {
                    users.data[indice] = data;
                } else {
                    return res.status(404).render('not-found');
                }
                return res.status(200).redirect('/users/profile/1');
            }
        }
    },
    delete: (req, res, next) => {
        res.send('Entrar a la vista de eliminar cuenta');
    },
    destroy: (req, res, next) => {
        res.send('Eliminar Usuario');
    }
}

module.exports = userController;