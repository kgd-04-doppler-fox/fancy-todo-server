'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ToDo.belongsTo(models.User,{
        foreignKey : "userId",
        targetKey : "id"
      })
    }
  };
  ToDo.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    description: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    status: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    due_date: {
      type : DataTypes.DATE,
      validate : {
        dueDate(value) {
          if (new Date(value) < new Date()){
            throw `Tanggal tidak boleh lewat hari ini`
          }
        }
      }
    },
    userId: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'ToDo',
  });

  return ToDo;
};