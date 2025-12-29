const productServices = require('../services/productServices');

const categoriesMiddleware = async (req, res, next) => {
    try {
        const categories = await productServices.getAllCategories();
        res.locals.categories = categories;
    } catch (error) {
        console.error('Error al cargar las categorías:', error);
        res.locals.categories = [];
    }
    next();
};

module.exports = categoriesMiddleware;
