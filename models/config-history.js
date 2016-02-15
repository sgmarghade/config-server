'use strict';
module.exports = function(sequelize,DataTypes){
    var configHistory = sequelize.define('configHistory',{
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false

        },
        data:{
            type:DataTypes.TEXT,
            allowNull: false
        }
    },{
        classMethods: {
            associate: function(models) {
                configHistory.belongsTo(models.config);
                configHistory.belongsTo(models.service);
                configHistory.belongsTo(models.environment);
            }
        }
    });

    return configHistory;
}