'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addIndex('configs',['serviceId','environmentId','name'],{
      indexName:"uniqIndexServiceEnvironemtName",
      indicesType:'UNIQUE'
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeIndex("configs","uniqIndexServiceEnvironemtName");
  }
};
