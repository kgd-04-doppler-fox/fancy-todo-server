const { Todo } = require('../models')

class TodoController {
  static postAddTodo(req, res, next) {
    const { title, description, status, due_date } = req.body
    Todo.create({ title, description, status, due_date })
      .then(todo => {
        res.status(201).json({ todo })
      })
      .catch(err => {
        next(err)
      })
  }

  static showAllTodo(req, res) {
    Todo.findAll()
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
          todo: 'Todo with such id is not found.'
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
          }
        })
      res.status(201).json({ title, description, status, due_date })
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
        }
      })
      res.status(201).json({ status })
    } catch (err) {
      next(err)
    }
  }

  static async deleteTodoById(req, res, next) {
    try {
      const deleted = await Todo.destroy({
        where: { id: +req.params.id }
      })
      res.status(200).json({ message: 'Data has been deleted.' })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TodoController