const db = require('../../db/models');
const { Op } = require('sequelize');

const cartController = {
    getCart: async (req, res) => {
        try {
            if (req.session.currentUser) {
                // Return DB Cart
                const cart = await db.Cart.findOne({
                    where: { userId: req.session.currentUser.id },
                    include: [{
                        model: db.CartDetail,
                        as: 'cart_detail',
                        include: [{
                            model: db.Product,
                            as: 'product'
                        }]
                    }]
                });

                if (!cart) {
                    return res.json({ items: [], total: 0 });
                }

                // Calculate total and send items
                let total = 0;
                const items = cart.cart_detail.map(detail => {
                    const latestPrice = parseFloat(detail.product.price);
                    total += latestPrice * detail.quantity;
                    return {
                        id: detail.product.productId,
                        name: detail.product.name,
                        image: `/images/products/${detail.product.image}`, // TODO: Redimensionar Imagenes
                        price: latestPrice,
                        quantity: detail.quantity
                    };
                });

                // Option to update cart totalPurchase in DB too:
                cart.totalPurchase = total;
                await cart.save();

                return res.json({ items, total });
            } else {
                // Return Session Cart
                const sessionCart = req.session.cart || [];
                if (sessionCart.length === 0) {
                    return res.json({ items: [], total: 0 });
                }

                // Query products for latest prices
                const productIds = sessionCart.map(item => item.productId);
                const products = await db.Product.findAll({
                    where: { productId: { [Op.in]: productIds } }
                });

                let total = 0;
                const items = sessionCart.map(item => {
                    const product = products.find(p => p.productId === item.productId);
                    if (!product) return null;
                    const latestPrice = parseFloat(product.price);
                    total += latestPrice * item.quantity;
                    return {
                        id: product.productId,
                        name: product.name,
                        image: `/images/products/${product.image}`,
                        price: latestPrice,
                        quantity: item.quantity
                    };
                }).filter(i => i !== null);

                return res.json({ items, total });
            }
        } catch (error) {
            console.error('getCart Error:', error);
            res.status(500).json({ error: error.message });
        }
    },

    addToCart: async (req, res) => {
        try {
            const { productId, quantity } = req.body;
            const parsedQuantity = parseInt(quantity) || 1;

            const product = await db.Product.findByPk(productId);
            if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

            if (req.session.currentUser) {
                // DB Cart
                const userId = req.session.currentUser.id;
                let [cart] = await db.Cart.findOrCreate({
                    where: { userId },
                    defaults: { userId, totalPurchase: 0 }
                });

                let cartDetail = await db.CartDetail.findOne({
                    where: { cartId: cart.cartId, productId }
                });

                if (cartDetail) {
                    cartDetail.quantity += parsedQuantity;
                    // Update price historically just in case
                    cartDetail.price = product.price;
                    await cartDetail.save();
                } else {
                    await db.CartDetail.create({
                        cartId: cart.cartId,
                        productId: productId,
                        quantity: parsedQuantity,
                        price: product.price
                    });
                }
                res.status(200).json({ message: 'Agregado al carrito DB' });
            } else {
                // Session Cart
                if (!req.session.cart) req.session.cart = [];
                const existIndex = req.session.cart.findIndex(i => i.productId == productId);

                if (existIndex >= 0) {
                    req.session.cart[existIndex].quantity += parsedQuantity;
                } else {
                    req.session.cart.push({ productId: parseInt(productId), quantity: parsedQuantity });
                }
                res.status(200).json({ message: 'Agregado al carrito de sesión' });
            }
        } catch (error) {
            console.error('addToCart Error:', error);
            res.status(500).json({ error: error.message });
        }
    },

    updateQuantity: async (req, res) => {
        try {
            const productId = parseInt(req.params.id);
            const { quantity } = req.body;
            const parsedQuantity = parseInt(quantity);
            if (parsedQuantity < 1) return res.status(400).json({ error: 'Cantidad inválida' });

            if (req.session.currentUser) {
                // DB Cart
                const cart = await db.Cart.findOne({ where: { userId: req.session.currentUser.id } });
                if (!cart) return res.status(404).json({ error: 'Carrito no existe' });

                const detail = await db.CartDetail.findOne({ where: { cartId: cart.cartId, productId } });
                if (detail) {
                    detail.quantity = parsedQuantity;
                    await detail.save();
                }
                res.status(200).json({ message: 'Cantidad actualizada' });
            } else {
                // Session Cart
                if (!req.session.cart) return res.status(404).json({ error: 'Carrito de sesión vacío' });

                const item = req.session.cart.find(i => i.productId == productId);
                if (item) {
                    item.quantity = parsedQuantity;
                }
                res.status(200).json({ message: 'Cantidad actualizada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    removeFromCart: async (req, res) => {
        try {
            const productId = parseInt(req.params.id);
            if (req.session.currentUser) {
                const cart = await db.Cart.findOne({ where: { userId: req.session.currentUser.id } });
                if (cart) {
                    await db.CartDetail.destroy({ where: { cartId: cart.cartId, productId } });
                }
                res.status(200).json({ message: 'Producto eliminado' });
            } else {
                if (req.session.cart) {
                    req.session.cart = req.session.cart.filter(i => i.productId != productId);
                }
                res.status(200).json({ message: 'Producto eliminado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = cartController;
