const { Todo, TodoUser, User } = require ('../models')
const axios = require ('axios')

class TodoController {
    static createTodo (req, res, next) {
        const {title, description, due_date, location} = req.body
        axios ({
            method : 'GET',
            url : "https://developers.zomato.com/api/v2.1/locations?query=" + location,
            headers : {
                "user-key": process.env.zomato
            }
        })
        .then(response => {
            const loc = response.data.location_suggestions[0]
            return Todo
            .create({
                title,
                description,
                status : `uncompleted`,
                due_date : new Date (due_date),
                UserId: Number(req.decodedUser.id),
                location: `${loc.title}, ${loc.country_name}`
            })
        })
        .then(todo => {
            return TodoUser.create({
                UserId: req.decodedUser.id,
                TodoId: todo.id
            })
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            next(err)
        })
    }

    static findAll (req, res){
        TodoUser
            .findAll({
                where : {
                    UserId : req.decodedUser.id
                },
                include: ['Todo', 'User']
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
        console.log(req.body)
        const {title, description, status, due_date, location} = req.body
        const idParams = req.params.id
        Todo    
            .update ({
                title,
                description,
                status,
                due_date : new Date (due_date),
                location: location
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

    static changeStatusTodo (req, res, next) {
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

    static deleteTodo (req, res, next) {
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

    static addMembers (req, res, next){
        const userId = req.body.userId
        const todoId = req.body.todoId
        TodoUser
            .create({
                UserId: userId,
                TodoId: todoId
            })
            .then(response => {
                res.status(201).json(response)
            })
            .catch( err => {
                next (err)
            })
    }
}

module.exports = TodoController