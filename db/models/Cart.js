module.exports = (Sequelize, DataTypes) => {
    const Cart = Sequelize.define('Cart', {
        cartId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shippingAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateStart: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateEnd: {
            type: DataTypes.DATE,
            allowNull: true
        },
        totalPurchase: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'cart',
        timestamps: true,
        underscored: true
    })

    return Cart
}