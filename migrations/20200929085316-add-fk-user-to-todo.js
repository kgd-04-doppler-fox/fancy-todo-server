'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Todos', 'UserId', {
    type : Sequelize.INTEGER,
    reference : {
      model : "Users",
      key : "id"
    }, 
    onUpdated : "cascade",
    onDeleted : "cascade"
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('Todos', 'UserId', {})
  }
};
