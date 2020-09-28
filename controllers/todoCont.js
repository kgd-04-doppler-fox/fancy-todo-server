const { Todo } = require(`../models/index`)

class TodoController {
    static async allTodos(req, res, next) {
        try {
            const todo = await Todo.findAll()
            res.status(200).json({ todo })
        }
        catch(err){
            next(err)
        }
            
    }

    static async addTodos(req, res, next) {
        const { title, description, status, due_date } = req.body
        try {
            const todo = await Todo.create(
                {
                    title,
                    description,
                    status,
                    due_date
                }
            )
            res.status(201).json({ todo })
        }
        catch(err){
            next (err)
        }
        
    }

    static async getById(req, res, next) {
        const { id } = req.params
        try {
            const todo = await Todo.findByPK(
                {
                    id
                }
            )
            res.status(201).json({ todo })
        }
        catch(err){
            next (err)
        }
        
    }

    static async putTodos(req, res, next) {
        const { title, description, status, due_date } = req.body
        const { id } = req.params
        try {
            const todo = await Todo.update(
                {
                    title,
                    description,
                    status,
                    due_date
                },
                {
                    where : {id}
                }
            )
            res.status(201).json({ todo })
        }
        catch(err){
            next (err)
        }
        
    }

    static async patchTodos(req, res, next) {
        const { status } = req.body
        const { id } = req.params
        try {
            const todo = await Todo.update(
                {
                    status,
                },
                {
                    where : {id}
                }
            )
            res.status(201).json({ todo })
        }
        catch(err){
            next (err)
        }
        
    }

    static async deleteTodos(req, res, next) {
        const { id } = req.params
        try {
            const todo = await Todo.delete(
                {
                    where: {
                        id : id
                    }
                }
            )
            res.status(201).json({ todo })
        }
        catch(err){
            next (err)
        }
        
    }


}

module.exports = TodoController