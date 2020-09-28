const { Todo } = require ('../models')

class TodoController {
    static createTodo (req, res, next) {
        const {title, description, status, due_date} = req.body
        Todo.create({
            title,
            description,
            status,
            due_date : new Date (due_date)
        }).then(todo => {
            res.status(201).json({ todo })
        }).catch(err => {
            next(err)
        })
    }

    static showAllTodo (req, res) {
        Todo.findAll()
        .then(todos => {
            res.status(200).json(todos)
        }).catch (err => {
            res.send(err)
        })
    }

    static findTodo (req, res, next) {
        const id = req.params.id
        Todo.findByPk(id)
        .then(todo => {
            if (!todo) {
                res.status(404).json({error : `ERROR 404 Not Found`})
            }
            res.status(200).json({ todo })
        }).catch (err => {
            next(err)
        })
    }

    static editTodo (req, res, next) {
        const {title, description, status, due_date} = req.body
        const optionId = req.params.id
        Todo.update ({
            title,
            description,
            status,
            due_date : new Date (due_date)
        }, {
            where : { id : optionId},
            returning : true
        }).then ( todo => {
            if (!todo) {
                res.status(404).json({error : `ERROR 404 Not Found`})
            }
            res.status(200).json(todo[1][0])
        }).catch (err => {
            next(err)
        })
    }

    static changeStatusTodo (req, res) {
        const {status} = req.body
        const idParams = req.params.id
        Todo.update({
            status : status
        }, {
            where : {id : idParams},
            returning: true
        }).then(todo => {
            if (!todo) {
                res.status(404).json({error : `ERROR 404 Not Found`})
            }
            res.status(todo[1][0])
        }).catch(err => {
            res.send(err)
        })
    }

    static deleteTodo (req, res) {
        const optionId = req.params.id
        Todo.destroy ({
            where : {id : optionId}
        }).then ( todo => {
            res.status(200).json({
                "message" : `Todo Successfully Deleted`
            })
        }).catch (err => {
            res.send(err)
        })
    }
}

module.exports = TodoController