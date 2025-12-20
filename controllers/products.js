const products = require("../data/products");
const db = require('../db/models');

const searchProduct = (id) => {
    return products.data.find(p => p.id == id);
}

const productController = {
    index: async (req, res, next) => {
        try {
            const products = await db.Product.findAll({
              include: [
                { association: 'brand' },
                { association: 'subcategory' }
              ]
            });
            //res.json(products);
            return res.render('index', { title: 'Sound City Music', products })

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
        
    },
    show: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const product = await db.Product.findByPk(id, {
                include: [
                    { association: 'brand' },
                    { association: 'subcategory' }
                ]
            })
            
            //return res.send(product);
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
            //return res.status(404).render('not-found');
        }
       
    },
    create: async (req, res, next) => {
        const brands = await db.Brand.findAll();
        const subcategories = await db.Subcategory.findAll({
              include: [ { association: 'category' } ]
            });

        //res.send(subcategories)
        res.render('products/create', { 
            title: 'Alta de Productos',
            brands,
            subcategories
        });
    },
    store: (req, res, next) => {
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
            //return res.send(newProduct);

            db.Product.create(newProduct)
                .then (() => { return res.redirect('/') })
                .catch (error => { return res.status(500).json({ error: error.message }) })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
    edit: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const product = await db.Product.findByPk(id);

            // utilizar una funcion para estos dos
            const brands = await db.Brand.findAll();
            const subcategories = await db.Subcategory.findAll({
              include: [ { association: 'category' } ]
            });

            //res.send(product);
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

            // Verificar si el producto existe antes de actualizar
            const product = await db.Product.findByPk(id);
            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }

            // Actualizar el producto
            await db.Product.update(updatedProduct, {
                where: { productId: id }
            });
            
            return res.redirect('/');
            
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res, next) => {
        try { 
            const id = parseInt(req.params.id);

            const product = await db.Product.findByPk(id, {
                include: [ { association: 'brand' } ]
            });
            
            if (!product) {
                return res.status(404).render('not-found');
            }

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
            const product = await db.Product.findByPk(id);
            
            if (!product) {
                return res.status(404).render('not-found');
            }

            await product.destroy({ where: { productId: id } })
                .then(() => { return res.redirect('/') })
                .catch(error => { return res.status(500).json({ error: error.message }) 
            })
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = productController;