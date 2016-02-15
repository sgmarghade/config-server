'use strict';

module.exports = function(sequelize,DataTypes){
    var service = sequelize.define('service',{
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
    },{
            classMethods:{
                associate: function(models){
                service.hasMany(models.config);
            }
        }
    }
    );
    return service;
}