const productServices = require('../services/productServices');

const brandsMiddleware = async (req, res, next) => {
    try {
        const brands = await productServices.getAllBrands();
        res.locals.brands = brands;
    } catch (error) {
        console.error('Error al cargar las marcas:', error);
        res.locals.brands = [];
    }
    next();
};

module.exports = brandsMiddleware;