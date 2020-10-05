'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Todos', 'UserId', Sequelize.INTEGER, {})
    
    await queryInterface.addConstraint('Todos', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_UserId',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.removeColumn('Todos', 'UserId')
  }
};
