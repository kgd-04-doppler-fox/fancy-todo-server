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
                res.service(200).json
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findAll (req, res){
        Todo
            .findAll()
            .then(todos => {
                res.send(todos)
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
                res.send( todo )
            })
            .catch ( err => {
                res.send ( err )
            })
    }

    static editTodo (req, res) {
        const {title, description, status, due_date} = req.body
        const id = req.params.id
        Todo    
            .update ({
                title,
                description,
                status,
                due_date
            },{
                where : { id : id}
            })
            .then ( todo => {
                res.send(todo)
            })
            .catch (err => {
                res.send(err)
            })
    }

    static changeStatusTodo (req, res) {
        Todo
            .update( {

            })
    }

    static deleteTodo (req, res) {
        Todo
            .destroy ({
                where : {
                    id : id
                }
            })
            .then ( todo => {
                res.send(todo)
            })
            .catch (err => {
                res.send(err)
            })
    }
}

module.exports = TodoController