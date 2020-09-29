const {Todo} = require('../models')

class TodoController{

    static async create(req, res, next){
       const {title, description, status, due_date} = req.body
       try{
           const todos = await Todo.create({
               title,
               description,
               status,
               due_date
           })
           res.status(201).json({todos})
       } catch (err) {
        next(err)
       }
    }


    static async findAll(req, res, next){
        try{
            const todos = await Todo.findAll()
            if (todos.length < 0){
                throw{
                    name: "not found"
                }
            }
            res.status(200).json({todos})
        } catch(err){
            next(err)
        }
    }


    static async findByPk(req, res, next){
        const id = Number(req.params.id)

        try {
            const todo = await Todo.findByPk(id)
            if (todo == null){
                throw {
                    name: 'not found'
                }
            }
            res.status(200).json(todo)
        } catch (err) {
            next(err)
        }
    }

    static async update(req, res, next){
        const id = req.params.id
        const {title, description, status, due_date} = req.body
        try {

            const todo = await Todo.update({
                title,
                description,
                status,
                due_date
            },{
                returning: true,
                where: {id}
            })
            if(todo[0] == 0){
                throw {
                    name: 'not found'
                }
            }
            res.status(200).json(todo[1][0])
            
        } catch (err) {
           next(err)
        }
    }

    static async updateStatus(req, res, next){
        const id = Number(req.params.id)
        const status = req.body.status

        try {
            const todo = await Todo.update({status},{
                where:{
                    id
                },
                returning: true
            })

            if (todo[0] == 0){
                throw{
                    name: 'not found'
                }
            }
            res.status(200).json(todo[1][0])
        } catch (err) {
            next(err)
        }

    }

    static async delete(req, res, next){
        const id = req.params.id
        try {
            
            const todo = await Todo.destroy({
                where: {id}
            })
            if (todo === 1){
                const msg = {
                    message: 'todo success to delete'
                }

                res.status(200).json(msg)                   
            }
            else{
                
                throw{
                    name: 'not found'
                }
            }
        } catch (err) {
            next(err)
        }
    }


}

module.exports = TodoController