'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, {
        targetKey : "id",
        foreignKey : "UserId"
      })
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'title cannont be empty'
        }
      }
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'description cannont be empty'
        }
      }
    }, 
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'status cannont be empty'
        }
      }
    }, 
    due_date: {
      type: DataTypes.DATEONLY,
      validate : {
        isAfter : {
          args : new Date().toString(),
          msg : "Please enter the right date!"
        }
      }
    },
    UserId : DataTypes.INTEGER,
    Snack: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Snack cannont be empty'
        }
      }
    }, 
}, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};

