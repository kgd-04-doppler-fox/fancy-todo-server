const { Todo } = require('../models')

class TodoController {
  static postAddTodo(req, res, next) {
    const { title, description, status, due_date } = req.body
    Todo.create({
      title, description, status, due_date,
      UserId: req.decodedUser.id
    })
      .then(todo => {
        res.status(201).json({ todo })
      })
      .catch(err => {
        next(err)
      })
  }

  static showAllTodo(req, res, next) {
    Todo.findAll({
      where: {
        UserId: req.decodedUser.id
      }
    })
      .then(todo => {
        res.status(200).json({ todo })
      })
      .catch(err => {
        next(err)
      })
  }

  static async showTodoById(req, res, next) {
    try {
      const todo = await Todo.findByPk(+req.params.id)
      if (todo === null) {
        throw {
          msg: 'Todo not found!'
        }
      }
      res.status(200).json({ todo })
    } catch (err) {
      next(err)
    }
  }

  static async putTodoById(req, res, next) {
    const { title, description, status, due_date } = req.body
    try {
      const updated = await Todo.update({
        title, description, status, due_date
      },
        {
          where: {
            id: +req.params.id
          },
          returning: true
        })
      if (updated[0] === 0) {
        throw {
          msg: 'Todo not found!'
        }
      } else {
        res.status(201).json(updated[1][0])
      }
    } catch (err) {
      next(err)
    }
  }

  static async patchTodoById(req, res, next) {
    const { status } = req.body
    try {
      const updated = await Todo.update({ status }, {
        where: {
          id: +req.params.id
        },
        returning: true
      })
      if (updated[0] === 0) {
        throw {
          msg: 'Todo not found!'
        }
      } else {
        res.status(201).json(updated[1][0])
      }
    } catch (err) {
      next(err)
    }
  }

  static async deleteTodoById(req, res, next) {
    try {
      const deleted = await Todo.destroy({
        where: { id: +req.params.id },
        returning: true
      })
      if (deleted[0] === 0) {
        throw {
          msg: 'Todo not found!'
        }
      } else {
        res.status(200).json({ msg: 'Todo has been deleted.' })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TodoController