'use strict';
const {
  Model
} = require('sequelize');

const bcryptjs = require (`bcryptjs`)
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Email Musn't empty!`
        },
        isEmail: {
          args: true,
          msg: `Must be email!`
        },
        notNull: {
          args: true,
          msg: `Email Musn't empty!`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Pass can't be empty!`
        },
        min: 6
      },
      notNull: {
        args: true,
        msg: `Pass can't empty!`
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(instance => { //hook bycryptjs
    console.log(instance)
    let salt = bcryptjs.genSaltSync(10)
    let hash = bcryptjs.hashSync(instance.password, salt)

    instance.password = hash
  })
  return User;
};