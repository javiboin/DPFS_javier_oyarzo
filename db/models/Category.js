module.exports = (Sequelize, DataTypes) => {
    const Category = Sequelize.define('Category', {
        categoryId: {
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
        tableName: 'category',
        timestamps: true,
        underscored: true
    })

    Category.associate = (models) => {
        Category.hasMany(models.Subcategory, {
            as: 'subcategories',
            foreignKey: 'category_id'
        })
    }
    
    return Category
}