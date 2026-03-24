module.exports = (Sequelize, DataTypes) => {
    const Cart = Sequelize.define('Cart', {
        cartId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        totalPurchase: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'cart',
        timestamps: true,
        underscored: true
    })

    Cart.associate = (models) => {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });

        Cart.hasMany(models.CartDetail, {
            as: 'cart_detail',
            foreignKey: 'cart_id'
        })
    }

    return Cart
}