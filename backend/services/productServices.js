const db = require('../db/models');
const productServices = {
    getAllProducts: async () => {
    return await db.Product.findAll({
            include: [
            { association: 'brand' },
            { association: 'subcategory' }
            ]
        });
    },

    getProductById: async (id) => {
        const product = await db.Product.findByPk(id, {
            include: ['brand', 'subcategory']
        });
        
        if (!product) {
            return res.status(404).render('not-found');
        }
        
        return product;
    },

    getAllBrands: async () => {
        return await db.Brand.findAll();
    },

    getCategory: async (categoryId) => {
        return await db.Category.findByPk(categoryId);
    },

    getAllCategories: async () => {
        return await db.Category.findAll({
            include: [{ association: 'subcategories' }]
        });
    },
    
    getAllSubcategories: async () => {
        return await db.Subcategory.findAll({
            include: [{ association: 'category' }]
        });
    },

    createProduct: async (data) => {
        return await db.Product.create(data);
    },

    updateProduct: async (id, updatedData) => {
        return await db.Product.update(updatedData, {
            where: { productId: id }
        });
    },

    destroyProduct: async (id) => {
        return await db.Product.destroy({ where: { productId: id } });
    },

    lastProduct: async () => {
        return await db.Product.findOne({
            order: [['createdAt', 'DESC']],
            attributes: ['productId', 'name'],
            limit: 1
        });
    }
};
module.exports = productServices;