module.exports = (Sequelize, DataTypes) => {
    const UserRole = Sequelize.define('UserRole', {
        userRoleId: {
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
        tableName: 'user_role',
        timestamps: true,
        underscored: true
    })

    return UserRole
}