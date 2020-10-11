const { Todo } = require ('../models')
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
            res.status(200).json(todo)
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
                res.status(200).json({
                    todos
                })
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
        // console.log(req.params.id)
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
        const userId = req.params.id
        const todoId = null
        Todo
            .findByPk(id)
            .then(todo => {
                todoId = todo.id
                return TodoUser.create({
                    UserId,
                    TodoId : todoId
                })
            })
            .then (todo => {
                res.status(200).json(todo)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TodoController