const products = require("../data/products")

const getAllProducts = () => {
    return products.data
}

const searchProduct = (id) => {
    return products.data.find(p => p.id == id);
}

const productController = {
    index: (req, res, next) => {
        res.render('index', { title: "Sound City Music", products: getAllProducts() });
    },
    index_admin: (req, res, next) => {
        res.render('products/read-products', { title: "Ver Productos", products: getAllProducts() });
    },
    show: (req, res, next) => {
        const id = req.params.id;
        const product = searchProduct(id);
        
        if (!product) {
            return res.status(404).render('not-found');
        }
        
        res.render('products/productDetail', { 
            title: 'Detalle de productos',
            id: product.id,
            name: product.name,
            brand: product.brand,
            description: product.description,
            image: product.image,
            category: product.category,
            subcategory: product.subcategory,
            price: product.price,
            price_cash: product.price_cash,
            price_installment_count: product.price_installment_count,
            price_installment: product.price_installment
        });
    }  
}

module.exports = productController;