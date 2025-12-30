const db = require('../db/models');
const bcryptjs = require('bcryptjs');

const userService = {
    createHash: async (passwordToConvert) => {
        const newHash = await bcryptjs.hash(passwordToConvert, 8);
        return newHash;
    },

    compareHash: async (password, hashToConvert) => {
    const compare = await bcryptjs.compare(password, hashToConvert);
    return compare;
    },

    getAllUsers: async () => {
        return await db.User.findAll({
            include: [
                { association: 'user_role' }
            ]
        });
    },
    
    createUser: async (userToCreate) => {
        return await db.User.create(userToCreate);
    },

    searchUser: async (id) => {
        const user = await db.User.findByPk(id, {
            include: [
                { association: 'user_role' }
            ]
        });

        if (!user){
            return res.status(404).render('not-found');
        }

        return user;
    },

    searchEmailUser: async (email) => {
        return await db.User.findOne({ where: { email: email } });
    },

    updateUser: async (id, updatedData) => {
        return await db.User.update(updatedData, {
            where: { userId: id }
        });
    },

    destroyUser: async (id) => {
        return await db.User.destroy({ where: { userId: id } });
    },

    lastUser: async () => {
        return await db.User.findOne({
            order: [['createdAt', 'DESC']],
            attributes: ['userId', 'firstname', 'lastname', 'email'],
            limit: 1
        });
    }   

};
module.exports = userService;