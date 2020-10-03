'use strict';
const bcryptjs = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, {
        sourceKey : "id",
        foreignKey : "UserId"
      })
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        // unique : true,
        isEmail : true,
        notEmpty : {
          args : true,
          msg : "Email cannot be empty"
        },
        notNull : {
          args : true , 
          msg : "Email cannot be empty"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true,
        len : [6 , 50]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate (user) {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(user.password, salt);
        console.log(hash);
        user.password = hash
      }
    }
  });
  return User;
};