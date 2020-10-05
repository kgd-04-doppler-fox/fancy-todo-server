const { Todo } = require('../models')

function authorization(req, res, next) {
  const id = req.params.id
  Todo.findByPk(id)
    .then(todo => {
      if (todo == null) {
        throw {
          name: "not found"
        }
      } else {
        if (todo.UserId === req.decodedUser.id) {
          next()
        }
        else {
          throw {
            name: "cannot access"
          }
        }
      }
    })
    .catch(err => {
      next(err)
    })

}

module.exports = authorization 