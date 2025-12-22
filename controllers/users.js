const userService = require("../services/userService");

const userController = {
    show: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const user = await userService.searchUser(id);

            res.render('users/profile', { 
                title: 'Mi cuenta', 
                id: user.userId,
                nombre: user.firstname,
                apellido: user.lastname,
                email: user.email,
                image: user.image
            }); 
        } catch (error) {
            return res.status(500).render('error', { error: error.message });
        }
    },
    edit: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const user = await userService.searchUser(id);

            res.render('users/edit', { 
                title: 'Modificar mis datos',
                id: user.userId,
                nombre: user.firstname,
                apellido: user.lastname,
                email: user.email,
                image: user.image 
            });
        } catch (error) {
            return res.status(500).render('error', { error: error.message });
        }
    },
    update: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const user = await userService.searchUser(id);

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

            await userService.updateUser(id, updatedData);
            return res.redirect('/users/profile/<%= id %>');
        } catch (error) {
            return res.status(500).render('error', { error: error.message });
        }
    },
    delete: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const user = await userService.searchUser(id);

            res.render('users/delete-profile', { title: 'Eliminar mi cuenta', id: user.userId });
        } catch (error) {
            return res.status(500).render('error', { error: error.message });
        }
    },
    destroy: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            await userService.destroyUser(id)
                .then(() => { return res.redirect('/') })
                .catch(error => { return res.status(500).json({ error: error.message }) });
        } catch (error) {
            return res.status(500).render('error', { error: error.message });
        }
    }
}

module.exports = userController;