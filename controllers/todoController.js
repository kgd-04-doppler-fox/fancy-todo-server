const { Todo } = require('../models')


class TodoController {
    static findAll (req, res) {
        Todo.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static addTodo (req, res) {
        Todo.create({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static findOne (req, res) {
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
            res.status(500).json(err)
        })
    }

    static updateData (req, res) {
        let id = +req.params.id
        let updatedData = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        }
        Todo.update(updatedData, {
            where : {
                id : id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static updateStatus (req, res) {
        let id = +req.params.id
        let status = req.body.status

        Todo.update(status, {
            where : {
                id : id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static deleteData (req, res) {
        let id = +req.params.id
        Todo.destroy({
            where : {
                id : id
            }
        })
        .then(data => {
            console.log(data);
            if(data === 1){
                res.status(200).json({message: 'todo success to delete'})
            } else {
                res.status(404).json({message: 'Invalid todo'})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = TodoController

