const { Todo } = require(`../models/index`)

class TodoController {
    static allTodo(req, res, next) {
        Todo.findAll()
            .then(todo => {
                res.status(200).json({todo})
            })
            .catch(err => {
                next(err)
            })
    }

    static addTodo(req, res, next) {
        const {title, description, status, due_date} = req.body
        Todo.create(
            { 
                title,
                description,
                status, 
                due_date
            }
        )
            .then(todo => {
                res.status(201).json({todo})
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TodoController