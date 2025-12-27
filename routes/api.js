const express = require('express');
const router = express.Router();

const productServices = require('../services/productServices');
const userServices = require('../services/userServices');

router.get('/', (req, res) => {
    res.json({ message: 'API de Sound City Instrumentos' });
});

router.get('/users', async (req, res) => {
    try {
        const getUsers = await userServices.getAllUsers();
        const users = getUsers.map((user) => ({
            id: user.userId,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            url: `http://127.0.0.1:3000/products/product-detail/${user.userId}`
        }));
        const count = users.length;

        return res.json({count, users});
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const getUser = await userServices.searchUser(req.params.id);
        const urlProfile = '/public/images/' + getUser.image;
        const user = {
            id: getUser.userId,
            firstname: getUser.firstname,
            lastname: getUser.lastname,
            email: getUser.email,
            image: urlProfile
        }

        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

router.get('/products', async (req, res) => {
    res.json(await productServices.getAllProducts());
});

router.get('/products/:id', async (req, res) => {
    res.json(await productServices.getProductById(req.params.id));
});

module.exports = router;