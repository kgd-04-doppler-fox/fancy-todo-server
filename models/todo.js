'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
  
    static associate(models) {
     Todo.belongsToMany(models.User, {through:"TodoUser"})
    }
  };
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isValid (value){
          if (value < new Date()){
            throw new Error (`tanggal tidak valid`)
          }
        }
      }
    },
    UserId: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};