const jwt = require('jsonwebtoken')
const { User } = require('../models')

exports.authentication = (req, res, next) => {
  let token = req.headers.access_token
  const decoded = jwt.verify(token, process.env.JWT_SECRET)

  if (decoded) {
    User.findByPk(decoded.id)
      .then(user => {
        if (user) {
          req.decodedUser = decoded
          next()
        } else {
          next({
            msg: 'Unauthorized.'
          })
        }
      })
  } else {
    next({
      msg: 'Unauthorized.'
    })
  }
}
