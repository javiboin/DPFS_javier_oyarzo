module.exports = (Sequelize, DataTypes) => {
    const Subcategory = Sequelize.define('Subcategory', {
        subcategoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        categoryId: DataTypes.INTEGER
    },
    {
        tableName: 'subcategory',
        timestamps: true,
        underscored: true
    })

    Subcategory.associate = (models) => {
        Subcategory.belongsTo(models.Category, { 
            as: 'category',
            foreignKey: 'category_id'
        });

        Subcategory.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'subcategory_id'
        })
    }

    return Subcategory
}