const { Todo } = require(`../models/index`)
// const fs = require(`fs`)

class TodoController {
    static async allTodos(req, res, next) {
        try {
            const todo = await Todo.findAll({
                where: { UserId: +req.decodedUser.id },
                order: [[`id`, `ASC`]]
            })
            res.status(200).json({ todo })
        }
        catch (err) {
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
                    due_date,
                    UserId: +req.decodedUser.id
                }
            )
            // TodoController.save(todo, (err) => {//save function to api
            //     if (err) {
            //         next(err)
            //     } else {
            //         res.status(200).json({ msg: 'todo succes to create and convert' })
            //     }
            // })
            res.status(201).json({ todo })
        }
        catch (err) {
            next(err)
        }

    }

    static async getById(req, res, next) {
        const { id } = req.params
        try {
            const todo = await Todo.findOne(
                {
                    where: {
                        UserId: +req.decodedUser.id,
                        id: id
                    }
                }
            )
            if (todo === null) {
                throw { name: `Error not found` } //handle to errorhandle
            }
            res.status(200).json({ todo })
        }
        catch (err) {
            next(err)
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
                    where: {
                        UserId: +req.decodedUser.id,
                        id: id
                    },
                    returning: true
                }
            )
            if (todo[0] === 0) {
                throw { name: `Error not found` }
            } else {
                res.status(200).json(todo[1][0])
            }
        }
        catch (err) {
            next(err)
        }

    }

    static async patchTodos(req, res, next) {
        const { status } = req.body
        const { id } = req.params
        try {
            const todo = await Todo.update(
                {
                    status
                },
                {
                    where: {
                        UserId: +req.decodedUser.id,
                        id: id
                    },
                    returning: true
                }
            )

            if (todo[0] === 0) {
                throw { name: `Error not found` }
            } else {
                res.status(200).json(todo[1][0])
            }
        }
        catch (err) {
            next(err)
        }

    }

    static async deleteTodos(req, res, next) {
        const { id } = req.params
        try {
            const todo = await Todo.destroy(
                {
                    where: {
                        UserId: +req.decodedUser.id,
                        id: id
                    }
                }
            )
            if (todo === 0) {
                throw { name: `Error not found` }
            } else {
                res.status(200).json({ msg: 'todo succes to delete' })
            }
        }
        catch (err) {
            next(err)
        }

    }


    // static save(input, callback) {
    //     fs.writeFile(`todos.json`, JSON.stringify(input, null, 2), "utf8", (err) => {
    //         if (err) {
    //             next(err)
    //         } else {
    //             console.log(`Success making json`)
    //         }
    //     })
    // }

}

module.exports = TodoController