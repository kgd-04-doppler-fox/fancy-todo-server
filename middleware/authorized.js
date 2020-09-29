const { Todo } = require ('../models')

function authorization (req, res, next) {
    const id = +req.params.id
    Todo
        .findOne({
            where : {
                id
            }
        })
        .then (todo => {
            if (todo === null){
                throw {
                    name : `error not found`
                }
            }
            else {
                if (todo.UserId === req.decodedUser.id) {
                    next()
                }
                else {
                    throw {
                        name : `unauthorized user`
                    }
                }
            }
        })
        .catch (err => {
            next(err)
        })

} 

module.exports = authorization