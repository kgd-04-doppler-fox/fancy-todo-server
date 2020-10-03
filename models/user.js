'use strict';
const bcryptjs = require ('bcryptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 
    static associate(models) {
      User.belongsToMany(models.Todo, {through: "TodoUser"})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isEmail : true,
        notEmpty: true,
        notNull :true
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty : true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate (user) {
        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(user.password, salt)
        user.password = hash
      }
    }
  });
  return User;
};