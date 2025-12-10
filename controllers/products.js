const products = require("../data/products");

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
    },
    edit: (req, res, next) => {
        const id = req.params.id;
        const product = searchProduct(id);
        
        if (!product) {
            return res.status(404).render('Producto no encontrado');
        }
        
        res.render('products/edit', { 
            title: 'Modificar Producto',
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
    },
    update: (req, res, next) => {
        let id = req.params.id;
        let product = searchProduct(id);

        if (req.body.image == ""){
            req.body.image = product.image
        }

        let data = {
            id: id, 
            name: req.body.name, 
            brand: req.body.brand, 
            description: req.body.description, 
            image: req.body.image, 
            category: req.body.category, 
            subcategory: req.body.subcategory, 
            price: req.body.price, 
            price_cash: req.body.price_cash, 
            price_installment_count: req.body.price_installment_count, 
            price_installment: req.body.price_installment
        }; 

        // guardar en products
        let indice = products.data.findIndex(p => p.id == id)

        if (indice !== -1) {
            products.data[indice] = data;
        } else {
            return res.status(404).send("Producto no encontrado");
        }
        
        return res.status(200).redirect('/');
    },
    destroy: (req, res, next) => {
        let id = parseInt(req.params.id);
        let indice = products.data.findIndex(p => p.id === id);

        if (indice !== -1) {
            products.data.splice(indice, 1);
            return res.redirect('/');
        } else {
            return res.status(404).send("Producto no encontrado");
        }
    }
}

module.exports = productController;