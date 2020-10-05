const { Todo } = require('../models')

class TodoController {
  static showAll(req, res, next) {
    Todo.findAll({
      where:{
        UserId:req.decodedUser.id
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static postTodo(req, res, next) {
    const { title, description, status, due_date } = req.body
    Todo.create({
      title,
      description,
      status,
      due_date,
      UserId: req.decodedUser.id
    })
      .then(todo => {
        console.log(todo)
        res.status(201).json(todo)
      })
      .catch(err => {
        next(err)
      })
  }


  static findById(req, res, next) {
    const id = req.params.id
    Todo.findOne({
      where: {
        id: id
      }
    })
      .then(data => {
        if (!data) {
          throw {
            name: "not found"
          }
        } else {
          res.status(200).json(data)
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static putTodo(req, res, next) {
    let id = req.params.id
    let { title, description, status, due_date } = req.body
    let updated = {
      title,
      description,
      status,
      due_date
    }

    Todo.update(updated, {
      where: {
        id: id
      },
      returning: true
    })
      .then(data => {
        console.log(data)
        if (data[0] == 0) {
          throw {
            name: "not found"
          }
        }
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static patchTodo(req, res, next) {
    let id = req.params.id

    Todo.update({ status: req.body.status }, {
      where: {
        id: id
      },
      returning: true
    })
      .then(data => {
        if (data[0] == 0) {
          throw {
            name: "not found"
          }
        }
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static delete(req, res, next) {
    let id = req.params.id
    Todo.destroy({
      where: {
        id: id
      },
      returning: true
    })
      .then(data => {
        if (!data) {
          throw {
            name: "not found"
          }
        } else {
          res.status(200).send({ msg: "todo success to delete" })
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = TodoController