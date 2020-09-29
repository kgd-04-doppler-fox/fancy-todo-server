const { Todo } = require ('../models')


class TodoController {
    static createTodo (req, res, next) {
        const {title, description, status, due_date} = req.body
        Todo   
            .create({
                title,
                description,
                status,
                due_date : new Date (due_date),
                UserId: Number(req.decodedUser.id)

            })
            .then(todo => {
                res.status(201).json({todo})
            })
            .catch(err => {
                next(err)
            })
    }

    static findAll (req, res){
        Todo
            .findAll({
                where : {
                    UserId : req.decodedUser.id
                }
            })
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch (err => {
                res.send(err)
            })
    }

    static findById (req, res, next) {
        const id = req.params.id
        Todo
            .findByPk(id)
            .then(todo => {
               if (!todo){
                   res.status(404).json({error : `not found`})
               }
               res.status(200).json({todo})
            })
            .catch ( err => {
                next(err)
            })
    }

    static editTodo (req, res, next) {
        const {title, description, status, due_date} = req.body
        const idParams = req.params.id
        Todo    
            .update ({
                title,
                description,
                status,
                due_date : new Date (due_date)
            },{
                where : { id : idParams},
                returning : true
            })
            .then ( todo => {
                if (todo[0] === 0){
                    res.status(404).json({error : `not found`})
                }

                res.status(200).json(todo[1][0])
            })
            .catch (err => {
                next(err)
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
                if (!todo){
                    throw {
                        name : `error not found`
                    }
                }
                res.status(200).json({
                    book : todo[1][0]
                })
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