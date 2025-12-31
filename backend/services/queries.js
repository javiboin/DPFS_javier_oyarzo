const { sequelize } = require('../db/models');

const queries = {
    getCountByCategory: async () => {
        const query = `
            SELECT 
                category.name AS name, 
                COUNT(distinct product_id) AS count
            FROM product 
            JOIN 
                subcategory ON subcategory.subcategory_id = product.subcategory_id
            JOIN 
                category ON category.category_id = subcategory.category_id
            GROUP BY  
                category.category_id, category.name
            ORDER BY 
                count DESC;
        `;
        const result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        });
        
        return result;
    },

    getCountBySubcategory: async () => {
        const query = `
            SELECT 
            category.name AS category,
            subcategory.name AS subcategory, 
            COUNT(distinct product_id) AS count
            FROM product 
            JOIN 
                subcategory ON subcategory.subcategory_id = product.subcategory_id
            JOIN 
                category ON category.category_id = subcategory.category_id
            GROUP BY 
                subcategory.subcategory_id, subcategory.name
            ORDER BY category ASC, subcategory ASC
        `;
        const result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        });
        
        return result;
    }
}
module.exports = queries;