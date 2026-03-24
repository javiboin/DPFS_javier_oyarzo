module.exports = (Sequelize, DataTypes) => {
    const OrderDetail = Sequelize.define('OrderDetail', {
        orderDetailId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
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
        tableName: 'order_detail',
        timestamps: true,
        underscored: true
    });

    OrderDetail.associate = (models) => {
        OrderDetail.belongsTo(models.Orders, {
            as: 'orders',
            foreignKey: 'order_id'
        });

        OrderDetail.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return OrderDetail
}