const { Todo } = require('../models')

exports.authorization = (req, res, next) => {
  Todo.findByPk(+req.params.id)
    .then(todo => {
      if (todo === null) {
        throw {
          msg: 'Todo not found!'
        }
      } else if (todo.UserId === req.decodedUser.id) {
        next()
      } else {
        throw {
          msg: 'Unauthorized.'
        }
      }
    })
    .catch(err => {
      next(err)
    })
}