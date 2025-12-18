module.exports = (Sequelize, DataTypes) => {
    const CartDetail = Sequelize.define('CartDetail', {
        cartDetailId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
    {
        tableName: 'cart_detail',
        timestamps: true,
        underscored: true
    });

    CartDetail.associate = (models) => {
        CartDetail.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'cart_id'
        });

        CartDetail.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return CartDetail
}