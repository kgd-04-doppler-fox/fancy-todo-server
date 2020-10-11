'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoUser extends Model {
    
    static associate(models) {
      TodoUser.belongsTo(models.User)
      TodoUser.belongsTo(models.Todo)
    }
  };
  TodoUser.init({
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TodoUser',
  });
  return TodoUser;
};