const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
  static async register(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.create({
        email, password
      })
      res.status(201).json({ id: user.id, email })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({
        where: { email }
      })
      if (user === null) {
        throw {
          msg: 'Wrong email or password.'
        }
      }
      const validate = bcrypt.compareSync(password, user.password)
      if (validate) {
        const token = jwt.sign({
          id: user.id,
          email: user.email
        }, process.env.JWT_SECRET)
        res.status(200).json({ access_token: token })
      } else {
        throw {
          msg: 'Wrong email or password.'
        }
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController