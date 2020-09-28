const { Todo } = require('../models')

class TodoController {
    static showAll(req, res,next) {
        Todo.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static postTodo(req, res,next) {
        const { title, description, status, due_date } = req.body

        Todo.create({
            title,
            description,
            status,
            due_date
        })
            .then(todo => {
                res.status(201).json(todo)
            })
            .catch(err => {
                next(err)
            })
    }

    static byId(req, res,next) {
        const id = req.params.id
        Todo.findOne({
            where: {
                id: id
            }
        })
            .then(data => {
                if (data == undefined) {
                    throw new Error
                } else {
                    res.status(200).json(data)
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static putTodo(req, res,next) {
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
            }
        })
            .then(data => {
                return Todo.findOne({
                    where: {
                        id: id
                    }
                })
            })
            .then(result => {
                if (result == undefined) {
                    throw new Error
                }
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static patchTodo(req, res,next) {
        let id = req.params.id

        Todo.update({ status: req.body.status }, {
            where: {
                id: id
            }
        })
            .then(() => {
                return Todo.findOne({
                    where: {
                        id: id
                    }
                })
            })
            .then(data => {
                if (data == undefined) {
                    throw new Error
                }
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res,next) {
        let id = req.params.id
        Todo.findOne({
            where: {
                id: id
            }
        })
            .then(data => {
                if (data == undefined) {
                    throw new Error
                }
                return Todo.destroy({
                    where: {
                        id: id
                    }
                })
            })
            .then(data => {
                res.status(200).send({ msg: "todo success to delete" })
            })
            .catch(err => {
            next(err)
            })
    }
}

module.exports = TodoController