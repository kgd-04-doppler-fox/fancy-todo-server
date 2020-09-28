const { Todo } = require(`../models/index`)

class TodoController {
    static async allTodo(req, res, next) {
        try {
            const todo = await Todo.findAll()
            res.status(200).json({ todo })
        }
        catch(err){
            next(err)
        }
            
    }

    static async addTodo(req, res, next) {
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
}

module.exports = TodoController