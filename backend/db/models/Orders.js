module.exports = (Sequelize, DataTypes) => {
    const Orders = Sequelize.define('Orders', {
        orderId: {
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
        tableName: 'orders',
        timestamps: true,
        underscored: true
    })

    Orders.associate = (models) => {
        Orders.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });

        Orders.belongsTo(models.Status, {
            as: 'status',
            foreignKey: 'status_id'
        });

        Orders.hasMany(models.OrderDetail, {
            as: 'order_detail',
            foreignKey: 'order_id'
        })
    }

    return Orders
}