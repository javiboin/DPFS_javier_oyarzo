const userServices = require('../../services/userServices');

const apiUsersController = {
    index: async (req, res, next) => {
        try {
            const getUsers = await userServices.getAllUsers();
            const count = getUsers.length;
            const users = getUsers.map((user) => ({
                id: user.userId,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }));

            return res.json({count, users});
        } catch (error) {
            return res.status(500).json({ error: 'Error al obtener usuarios' });
        }
    },
    show: async (req, res, next) => {
        try {
            const user = await userServices.searchUser(req.params.id);
            const result = {
                id: user.userId,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                url: `http://127.0.0.1:3000/images/${user.image}`
            }

            return res.json(result);
        } catch (error) {
            return res.status(500).json({ error: `Error al obtener el usuario ${req.params.id}` });
        }
    },
    showLastUser: async (req, res, next) => {
        try {
            const lastUser = await userServices.lastUser();
            
            if (!lastUser) {
                return res.status(404).json({ error: 'No se encontró el último usuario' });
            }
            
            const result = {
                createdAt: lastUser.createdAt,
                id: lastUser.userId,
                firstname: lastUser.firstname,
                lastname: lastUser.lastname,
                email: lastUser.email,
            };
            
            return res.json(result);
        } catch (error) {
            return res.status(500).json({ error: 'Error al obtener el último usuario', details: error.message });
        }
    }
}

module.exports = apiUsersController;