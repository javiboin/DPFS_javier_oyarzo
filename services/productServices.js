const db = require('../db/models');
const productServices = {
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
    
    getAllSubcategories: async () => {
        return await db.Subcategory.findAll({
            include: [{ association: 'category' }]
        });
    }
};
module.exports = productServices;