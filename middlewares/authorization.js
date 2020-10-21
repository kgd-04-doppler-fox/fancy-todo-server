const { Todo } = require(`../models`)

function authorization(req, res, next) {
    console.log(req.params)
    Todo.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(todo => {
            if (todo === null) {
                throw { name: `Error not found` }
            } else {
                if (todo.UserId === req.decodedUser.id) {
                    next()
                }
                else {
                    throw { name: `Unauthorized` }
                }
            }
        })
        .catch(err => {
            console.table(err)
            next(err)
        })

}

module.exports = authorization