const { Todo } = require('../models')

function authorization (req, res, next) {
    let id = +req.params.id
    Todo.findOne({
        where : {
            id : id
        }
    })
    .then(data => {
        if(data === null) {
            throw {
                name : 'not found'
            }
        } else {
            if(data.UserId === req.decodedUser.id){
                next()
            } else {
                throw {
                    name : "unauthorized access"
                }
            }
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authorization