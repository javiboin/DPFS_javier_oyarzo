const users = require("../data/users");
const { update } = require("./adminUsers");

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

        // formatear los datos del req.body
        const { action, ...formData } = req.body;
        let updatedData = { ...user };

        switch (req.body.action) {
            case 'edit-img':
                if (formData.image !== ''){
                    updatedData.image = formData.image;
                }
                break;

            case 'edit-email':
                if (formData.email !== ''){
                    updatedData.email = formData.email;
                }
                break;
        
            case 'edit-password':
                if (formData.password !== ''){
                    updatedData.password = formData.password
                }    

                if (updatedData.password !== formData.oldPassword && formData.password !== formData.confirmPassword){
                    return res.send('Las contraseñas no son iguales')
                }
                break;
            
            default:
                return res.status(404).render('not-found');
        }
        
        const indice = users.data.findIndex(p => p.id == id)
                
        if (indice !== -1) {
            users.data[indice] = updatedData;
        } else {
            return res.status(404).render('not-found');
        }
        return res.status(200).redirect('/users/profile/1');

    },
    delete: (req, res, next) => {
        const id = parseInt(req.params.id);
        const user = searchUser(id);

        if (!user){
            return res.status(404).render('not-found');
        }

        res.render('users/delete-profile', { title: 'Eliminar mi cuenta', id: id });
    },
    destroy: (req, res, next) => {
        const id = parseInt(req.params.id);
        const indice = users.data.findIndex(p => p.id === id);

        if (indice !== -1) {
            users.data.splice(indice, 1);
            return res.redirect('/');
        } else {
            return res.status(404).send("Usuario no encontrado");
        }
    }
}

module.exports = userController;