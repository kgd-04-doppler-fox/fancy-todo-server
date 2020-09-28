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
      // define association here
    }
  };
  ToDo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type : DataTypes.DATE,
      validate : {
        dueDate(value) {
          if (new Date(value) > new Date()){
            throw `Tanggal tidak boleh lewat hari ini`
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};