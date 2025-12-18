module.exports = (Sequelize, DataTypes) => {
    const Status = Sequelize.define('Status', {
        statusId: {
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
        tableName: 'status',
        timestamps: true,
        underscored: true
    })

    return Status
}