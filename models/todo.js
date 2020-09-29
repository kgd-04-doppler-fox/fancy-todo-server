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
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Title Cannot be Empty !`
        },
        notNull: {
          args: true,
          msg: `Title Cannot be Null !`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Description Cannot be Empty !`
        },
        notNull: {
          args: true,
          msg: `Description Cannot be Null !`
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Status Cannot be Empty !`
        },
        notNull: {
          args: true,
          msg: `Status Cannot be Null !`
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isNow(date) {
          if (date.getTime() < new Date().getTime()) {
            throw new Error(`Date can't today`)
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};