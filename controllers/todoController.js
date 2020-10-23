const axios = require('axios')
const { Todo } = require('../models')
// const searchSnack = require('../helper/zomato')


class TodoController {
    static findAll (req, res, next) {
        Todo.findAll({
            where : {
                UserId : req.decodedUser.id
            },
            order:[['id', 'ASC']]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static searchSnack (snacks){
        // console.log(snacks);
        return axios({
            method : "GET",
            url : "https://developers.zomato.com/api/v2.1/search?q=" + snacks,
            headers : {
                Accept: "application/json",
                "user-key": process.env.TOKEN_ZOMATO
            }
        })
    }

    static addTodo (req, res, next) {
        TodoController.searchSnack(req.body.Snack)
        .then(response => {
            if(response) {
                let randomSnack = Math.floor(Math.random() * response.data.restaurants.length)
                console.log(response.data.restaurants);
                return Todo.create({
                    title       : req.body.title,
                    description : req.body.description,
                    status      : req.body.status,
                    due_date    : req.body.due_date,
                    Snack       : response.data.restaurants[randomSnack].restaurant.name,
                    UserId      : req.decodedUser.id
                })
            } else {
                throw {
                    name: "snack not found, please input another snack"
                }
            }     
        })
        .then(data => {
            // console.log(data);
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static findOne (req, res, next) {
        let id = +req.params.id
        Todo.findOne({
            where: {
                id : id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static updateData (req, res, next) {
        let id = +req.params.id
        TodoController.searchSnack(req.body.Snack)
            .then(response => {
                return Todo.update({
                    title       : req.body.title,
                    description : req.body.description,
                    status      : req.body.status,
                    Snack       : response.data.restaurants[0].restaurant.name,
                    due_date    : req.body.due_date,
                    UserId      : req.decodedUser.id
                }, 
                {
                    where : {
                        id : id
                    }
                },
                )
            })
        // console.log(updateData)
            .then(data => {
                // console.log(data)
                if(data[0] === 1){
                    res.status(200).json(data[1][0])
                } else {
                    throw {
                        name : "not found"
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static updateStatus (req, res, next) {
        let id = +req.params.id
        let updateStatus = {
            status : req.body.status
        }
        Todo.update(updateStatus, {
            where : {
                id : id
            },
            returning : true
        })
        // console.log(updateData)
        .then(data => {
            // console.log(data)
            if(data[0] === 1){
                res.status(200).json(data[1][0])
            } else {
                throw {
                    name : "not found"
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static deleteData (req, res, next) {
        let id = +req.params.id
        Todo.destroy({
            where : {
                id : id
            }
        })
        .then(data => {
            // console.log(data);
            if(data === 1){
                res.status(200).json({message: 'todo success to delete'})
            } else {
                res.status(404).json({message: 'Invalid todo'})
            }
        })
        .catch(err => {
            next(err)
        })
    }

    
}

module.exports = TodoController

