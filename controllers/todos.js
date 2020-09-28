const { Todo } = require ('../models')


class TodoController {
    static createTodo (req, res) {
        const {title, description, status, due_date} = req.body
        Todo   
            .create({
                title,
                description,
                status,
                due_date
            })
            .then(todo => {
                res.status(201).json({
                    todo
                })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findAll (req, res){
        Todo
            .findAll()
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch (err => {
                res.send(err)
            })
    }

    static findById (req, res) {
        const id = req.params.id
        Todo
            .findByPk(id)
            .then(todo => {
                res.status(200).json({
                    todo
                })
            })
            .catch ( err => {
                res.send ( err )
            })
    }

    static editTodo (req, res) {
        const {title, description, status, due_date} = req.body
        const idParams = req.params.id
        Todo    
            .update ({
                title,
                description,
                status,
                due_date
            },{
                where : { id : idParams},
                returning : true
            })
            .then ( todo => {
                res.status(200).json(todo[1][0])
            })
            .catch (err => {
                res.send(err)
            })
    }

    static changeStatusTodo (req, res) {
        const {status} = req.body
        const idParams = req.params.id
        Todo
            .update({
                status : status
            }, {
                where : {id : idParams},
                returning: true
            })
            .then(todo => {
                res.status(todo[1][0])
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteTodo (req, res) {
        const idParams = req.params.id
        Todo
            .destroy ({
                where : {id : idParams}
            })
            .then ( todo => {
                res.status(200).json({
                    "message" : `todo success to delete`
                })
            })
            .catch (err => {
                res.send(err)
            })
    }
}

module.exports = TodoController