const { Todo } = require('../models')


class TodoController {
    static findAll (req, res, next) {
        Todo.findAll({
            where : {
                UserId : req.decodedUser.id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static addTodo (req, res, next) {
        Todo.create({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date,
            UserId : req.decodedUser.id
        })
        .then(data => {
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
        let updatedData = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date,
            UserId : req.decodedUser.id
        }
        Todo.update(updatedData, {
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

