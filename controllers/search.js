const db = require('../db/models');
const { Op } = require('sequelize'); 
const searchController = {
    search: async (req, res) => {
        try {
            const { q } = req.query; 
            if (!q) {
                return res.redirect('/'); 
            }
            const products = await db.Product.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: `%${q}%` } },
                        { '$brand.name$': { [Op.like]: `%${q}%` } },
                        { '$subcategory.name$': { [Op.like]: `%${q}%` } },
                        { '$subcategory.category.name$': { [Op.like]: `%${q}%` } }
                    ]
                },
                include: [
                    { 
                        model: db.Brand,
                        as: 'brand',
                        attributes: ['name']
                    },
                    {
                        model: db.Subcategory,
                        as: 'subcategory',
                        include: [{
                            model: db.Category,
                            as: 'category',
                            attributes: ['name']
                        }]
                    }
                ]
            });

            res.render('products/search-results', { 
                products,
                searchTerm: q,
                title: `Resultados para: ${q}`
            });
        } catch (error) {
            console.error('Error en la búsqueda:', error);
            res.status(500).send('Error al realizar la búsqueda');
        }
    }
};

module.exports = searchController;