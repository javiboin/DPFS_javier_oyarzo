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

    return Subcategory
}