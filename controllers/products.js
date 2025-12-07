const products = require("../data/products")

const productController = {
    index: (req, res, next) => {
        res.render('index', { title: "Sound City Music", products: products.data });
    },
    show: (req, res, next) => {
        res.render('products/productDetail', { title: 'Detalle de productos' });
    }  
}

module.exports = productController;