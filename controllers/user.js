const {User} = require ('../models')

class UserController {
    static register(req, res, next){
        const { email, password, fullName } = req.body 
        User
            .create({
                email,
                password,
                fullName
            })
            .then (user => {
                res.status(201).json({
                    id: user.id,
                    fullName: user.fullName,
                    email: user.email
                })
            })
            .catch (err => {
                next(err)
            })
    }
}

module.exports = UserController