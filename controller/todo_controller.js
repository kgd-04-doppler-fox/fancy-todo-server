const { ToDo } = require ('../models')

class ToDoController {
    static getToDo (req,res) {
        ToDo.findAll ()
        .then (data => {
            console.log(data)
            res.status(200).json(data)
        })
        .catch (err => {
            res.status(500).json(err)
        })
    }

    static createToDo (req,res,next) {
        ToDo.create ({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        })
        .then (data => {
            res.status(201).json(data)
        })
        .catch (err => {
            next(err)
        })
    }
}

module.exports = ToDoController