const { ToDo } = require ('../models')

class ToDoController {
    static getToDo (req,res) {
        ToDo.findAll ()
        .then (data => {
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

    static getToDoById (req,res) {
        ToDo.findByPk (+req.params.id)
        .then (data => {
            res.status(200).json(data)
        })
        .catch (err => {
            res.status(500).json(err)
        })
    }

    static updateToDoByIdPut (req,res,next) {
        console.log(req.body)
        ToDo.update ({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        },{where : {
            id : +req.params.id
        }})
        .then (data => {
            res.status(200).json(data)
        })
        .catch (err => {
            next(err)
        })
    }

    static updateToDoByIdPatch (req,res,next) {
        ToDo.update (req.body,{where : {
            id : +req.params.id
        }})
        .then (data => {
            res.status(200).json(data)
        })
        .catch (err => {
            next(err)
        })
    }

    static deleteToDo (req,res) {
        ToDo.destroy ({
            where : {
                id : +req.params.id
            }
        })
        .then (data => {
            res.status(200).json({message : 'todo succes to delete'})
        })
        .catch (err => {
            res.status(500).json(err)
        })
    }
}

module.exports = ToDoController