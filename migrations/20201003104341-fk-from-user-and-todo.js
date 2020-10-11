'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("TodoUsers", "UserId", {
      type: Sequelize.INTEGER,
      reference : {
        model: "User",
        key: "id",
      },
      onDelete : "CASCADE",
      onUpdate : "CASCADE",
    })
    .then(()=> {
      return queryInterface.addColumn("TodoUsers", "TodoId", {
        type: Sequelize.INTEGER,
        reference : {
          model: "Todo",
          key: "id",
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("TodoUsers", "UserId", {})
    .then (()=> {
      return queryInterface.removeColumn("TodoUsers", "TodoId", {})
    })
  }
};
