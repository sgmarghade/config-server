'use strict';
var history = require('./config-history');

module.exports = function(sequelize,DataTypes){
    var config = sequelize.define('config',{
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
                config.hasMany(models.configHistory);
                config.belongsTo(models.service);
                config.belongsTo(models.environment);
            },
            getterMethods: {
                data: function(){
                    JSON.parse(this.getDataValue('data'));
                }
            }

        }

    });

    config.afterUpdate(function(model,done){
        this.associations.configHistories.target.create({configId:model.id,name:model.name,data:model.data,serviceId:model.serviceId, environmentId:model.environmentId}).then(function(savedInstance){
            return done;
        }).catch(function(err){
            console.log(err);
            return err;
        })
    });

    config.afterCreate(function(model,done){
        this.associations.configHistories.target.create({configId:model.id,name:model.name,data:model.data,serviceId:model.serviceId, environmentId:model.environmentId}).then(function(savedInstance){
            return done;
        }).catch(function(err){
            console.log(err);
            return err;
        })
    });


    return config;
}