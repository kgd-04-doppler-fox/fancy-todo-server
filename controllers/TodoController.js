const { Todo } = require('../models')

class TodoController {
  static postAddTodo(req, res) {
    const { title, description, status, due_date } = req.body
    Todo.create({ title, description, status, due_date })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static showAllTodo(req, res) {
    Todo.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static showTodoById(req, res) {
    Todo.findByPk(+req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static putTodoById(req, res) {

  }

  static patchTodoById(req, res) {

  }

  static deleteTodoById(req, res) {

  }
}

module.exports = TodoController