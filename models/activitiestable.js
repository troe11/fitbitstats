module.exports = function (sequelize, DataTypes) {
    var activitiesTable = sequelize.define("ActivitiesTable", {
        activityID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        calories: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        duration: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        logID: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        steps: {
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })

    return activitiesTable;
}