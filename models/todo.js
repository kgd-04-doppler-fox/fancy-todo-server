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
      Todo.belongsTo(models.User)
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'cannot be empty'
        },
        notNull:{
          args: true,
          msg: 'cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'cannot be empty'
        },
        notNull:{
          args: true,
          msg: 'cannot be empty'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'cannot be empty'
        },
        notNull:{
          args: true,
          msg: 'cannot be empty'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        isToday(value){
          if (value < new Date()){
            throw 'invalid date'
          }
        }
      }
    },

    UserId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'cannot be empty'
        },
        notNull:{
          args: true,
          msg: 'cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};