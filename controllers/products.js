const productServices = require('../services/productServices');

const productController = {
    index: async (req, res, next) => {
        try {
            const products = await productServices.getAllProducts();
            return res.render('index', { title: 'Sound City Music', products })

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    show: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const product = await productServices.getProductById(id);
            
            res.render('products/productDetail', { 
                title: 'Detalle de productos',
                id: product.productId,
                name: product.name,
                brand: product.brand.name,
                description: product.description,
                image: product.image,
                category: product.category,
                subcategory: product.subcategory,
                price: product.price,
                price_cash: product.priceCash,
                price_installment_count: product.priceInstallmentCount,
                price_installment: product.priceInstallment
            });
        } catch (error) {
            return res.status(500).json({ error: error.message})
        }
    },
    create: async (req, res, next) => {
        const brands = await productServices.getAllBrands();
        const subcategories = await productServices.getAllSubcategories();

        res.render('products/create', { 
            title: 'Alta de Productos',
            brands,
            subcategories
        });
    },
    store: async (req, res, next) => {
        try {
            const { name, brand, description, image, subcategory, price, priceCash, priceInstallmentCount, priceInstallment} = req.body
            
            const newProduct = {
                name: name,
                brandId: parseInt(brand),
                description: description,
                image: image,
                subcategoryId: parseInt(subcategory),
                price: parseFloat(price),
                priceCash: parseFloat(priceCash),
                priceInstallmentCount: parseInt(priceInstallmentCount),
                priceInstallment: parseFloat(priceInstallment)
            }

            await  productServices.createProduct(newProduct)
                .then (() => { return res.redirect('/') })
                .catch (error => { return res.status(500).json({ error: error.message }) })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
    edit: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const product = await productServices.getProductById(id);

            const brands = await productServices.getAllBrands();
            const subcategories = await productServices.getAllSubcategories();

            res.render('products/edit', { 
                title: 'Modificar Producto',
                id: id,
                name: product.name,
                brands,
                subcategories,
                brand: product.brandId,
                description: product.description,
                image: product.image,
                subcategory: product.subcategoryId,
                price: parseFloat(product.price),
                priceCash: parseFloat(product.priceCash),
                priceInstallmentCount: parseInt(product.priceInstallmentCount),
                priceInstallment: parseFloat(product.priceInstallment)
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const { name, brand, description, image, subcategory, price, priceCash, priceInstallmentCount, priceInstallment} = req.body;

            const updatedProduct = {
                name: name,
                brandId: parseInt(brand),
                description: description,
                image: image,
                subcategoryId: parseInt(subcategory),
                price: parseFloat(price),
                priceCash: parseFloat(priceCash),
                priceInstallmentCount: parseInt(priceInstallmentCount),
                priceInstallment: parseFloat(priceInstallment)
            };

            await productServices.getProductById(id);
            await productServices.updateProduct(id, updatedProduct);
            return res.redirect('/');
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res, next) => {
        try { 
            const id = parseInt(req.params.id);

            const product = productServices.getProductById(id);

            res.render('products/delete', { 
                title: 'Eliminar producto', 
                id: id,
                name: product.name,
                brand: product.brand.name,
                image: product.image
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    destroy: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);

            await productServices.destroyProduct(id)
                .then(() => { return res.redirect('/') })
                .catch(error => { return res.status(500).json({ error: error.message }) });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = productController;