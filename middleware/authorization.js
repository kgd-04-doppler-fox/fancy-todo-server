const { ToDo } = require ('../models')

function authorization (req,res,next) {
    ToDo.findByPk(+req.params.id)
    .then (todo => {
        if (todo === null) {
            throw {
                name : 'error not found'
            }
        } else {
            console.log(`${req.decodedUser.id} === ${todo.userId}`)
            if (todo.userId === req.decodedUser.id) {
                next ()
            } else {
                throw {
                    name : 'unauthorized access'
                }
            }
        }
    })
    .catch (err => {
        next(err)
    })
}

module.exports = authorization