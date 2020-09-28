const { User } = require ('../models')

class UserController {
    static registerUser (req, res, next) {
        const {email, password} = req.body 
        User.create({
            email,
            password
        }).then(user => {
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        }).catch(err => {
            next(err)
        })
    }
}

module.exports = UserController