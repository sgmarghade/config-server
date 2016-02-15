'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('configHistories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            configId:{
                allowNull: false,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            serviceId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            environmentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            data:{
              type:Sequelize.TEXT,
                allowNull:false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }

        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('configs');
    }
};
