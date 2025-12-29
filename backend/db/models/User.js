module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: DataTypes.STRING,
        userRoleId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
        },
        {
            tableName: 'user',
            timestamps: true,
            underscored: true
    })

    User.associate = (models) => {
        User.belongsTo(models.UserRole, {
            as: 'user_role',
            foreignKey: 'user_role_id'
        });

        User.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'user_id'
        })
    }


    return User
}