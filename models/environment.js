'use strict';

module.exports = function(sequelize,DataTypes){
    var environment = sequelize.define('environment',{
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        }
    });
    return environment;
}