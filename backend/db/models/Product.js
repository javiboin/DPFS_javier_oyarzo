module.exports = (Sequelize, DataTypes) => {
    const Product = Sequelize.define('Product', {
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subcategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: DataTypes.DECIMAL(10,2),
        priceCash: DataTypes.DECIMAL(10,2),
        priceInstallmentCount: DataTypes.INTEGER,
        priceInstallment: DataTypes.DECIMAL(10,2)
        },
        {
            tableName: 'product',
            timestamps: true,
            underscored: true
    })

    Product.associate = (models) => {
        Product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'brand_id'
        });

        Product.belongsTo(models.Subcategory, {
            as: 'subcategory',
            foreignKey: 'subcategory_id'
        });

        Product.hasMany(models.CartDetail, {
            as: 'cart_detail',
            foreignKey: 'product_id'
        })
    }

    return Product
}