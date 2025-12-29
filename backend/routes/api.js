const express = require('express');
const router = express.Router();
const productServices = require('../services/productServices');
const userServices = require('../services/userServices');
const queries = require('../services/queries');

router.get('/', (req, res) => {
    res.json({ message: 'API de Sound City Instrumentos' });
});

router.get('/users', async (req, res) => {
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
});

router.get('/users/:id', async (req, res) => {
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
});

router.get('/products', async (req, res) => {
    try {
        /* COUNT de productos */
        const getProducts = await productServices.getAllProducts();
        const count = getProducts.length;

        /* QUERIES */
        const countByCategory = await queries.getCountByCategory();
        const countBySubcategory = await queries.getCountBySubcategory();
        
        /* Obtener Productos */
        const products = await Promise.all(getProducts.map(async (product) => {
            /* Obtener categoria */
            const userCategory = await productServices.getCategory(product.subcategory.category_id);

            return {  
                id: product.productId,
                name: product.name,
                brand: product.brand.name,
                category: userCategory.name,
                subcategory: product.subcategory.name,
                url: `http://127.0.0.1:3000/products/product-detail/${product.productId}`,
                description: product.description,
            };
        }));
        
        return res.json({
            cantidad_de_productos: count,
            cantidad_de_productos_por_categoria: countByCategory,
            cantidad_de_productos_por_subcategoria: countBySubcategory,
            productos: products
        });

    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener productos' });
    }
});

router.get('/products/:id', async (req, res) => {
    try {
        const product = await productServices.getProductById(req.params.id);
        const userCategory = await productServices.getCategory(product.subcategory.category_id);

        const result = {
            id: product.productId,
            name: product.name,
            brand: product.brand.name,
            category: userCategory.name,
            subcategory: product.subcategory.name,
            url: `http://127.0.0.1:3000/images/${product.image}`,
            description: product.description,
        }

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: `Error al obtener el producto ${req.params.id}` });
    }
});

module.exports = router;