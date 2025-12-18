module.exports = (Sequelize, DataTypes) => {
    const Brand = Sequelize.define('Brand', {
        brandId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'brand',
        timestamps: true,
        underscored: true
    })

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'brand_id'
        })
    }
    
    return Brand
}