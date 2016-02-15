'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'configs',
        'data',
        {
          type: Sequelize.TEXT,
          allowNull: false
        }
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('configs', 'data');
  }
};
