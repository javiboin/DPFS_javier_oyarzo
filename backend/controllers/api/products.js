const productServices = require('../../services/productServices');
const queries = require('../../services/queries');

const apiProductsController = {
    index: async (req, res, next) => {
        try {
            /* COUNT de productos */
            const getProducts = await productServices.getAllProducts();
            const count = getProducts.length;
            
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
                productos: products
            });

        } catch (error) {
            return res.status(500).json({ error: 'Error al obtener productos' });
        }
    },
    show: async (req, res, next) => {
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
    },
    showByCategory: async (req, res, next) => {
        try {
            /* QUERIES */
            const countByCategory = await queries.getCountByCategory();

            return res.json({ cantidad_de_productos_por_categoria: countByCategory });
        } catch (error) {
            return res.status(500).json({ error: 'Error al obtener productos' }); 
        }
    },
    showBySubcategory: async (req, res, next) => {
        try {
            /* QUERIES */
            const countBySubcategory = await queries.getCountBySubcategory();

            return res.json({ cantidad_de_productos_por_subcategoria: countBySubcategory });
        } catch (error) {
        return res.status(500).json({ error: 'Error al obtener productos' }); 
        }
    },
    showBrands: async (req, res, next) => {
        try {
            const getBrands = await productServices.getAllBrands();
            return res.json({ cantidad_de_marcas: getBrands.length });

        } catch (error) {
            return res.status(500).json({ error: 'Error al obtener productos' });
        }
    },
    showLastProduct: async (req, res, next) => {
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
    }
}

module.exports = apiProductsController;