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

router.get('/users/last-user', async (req, res) => {
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

        const getBrands = await productServices.getAllBrands();
        
        return res.json({
            cantidad_de_productos: count,
            cantidad_de_productos_por_categoria: countByCategory,
            cantidad_de_productos_por_subcategoria: countBySubcategory,
            cantidad_de_marcas: getBrands.length,
            productos: products
        });

    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener productos' });
    }
});

router.get('/products/last-product', async (req, res) => {
    try {
        const lastProduct = await productServices.lastProduct();
        console.log(lastProduct);
        
        if (!lastProduct) {
            return res.status(404).json({ error: 'No se encontró el último producto' });
        }
        
        const result = {
            createdAt: lastProduct.createdAt,
            id: lastProduct.productId,
            name: lastProduct.name,
            url: `http://127.0.0.1:3000/products/product-detail/${lastProduct.productId}`,
        };
        
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el último producto', details: error.message });
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