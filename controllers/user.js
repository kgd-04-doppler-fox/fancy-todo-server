const {User} = require ('../models')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')

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

    static login (req, res, next) {
        const {email, password} = req.body
        User
            .findOne ({
                where : {
                    email
                }
            })
            .then (user => {
                if (!user){
                    throw {
                        name: `wrong email/password`
                    }
                }
                const correctPassword = bcryptjs.compareSync(password, user.password)
                if (correctPassword){
                    const accessToken = jwt.sign({
                        email : user.email,
                        id : user.id,
                    }, process.env.JWT_SECRET)
                     
                    res.status(200).json ({
                        accessToken
                    })
                }
                else {
                    throw {
                        name : `wrong email/password`
                    }
                }
            })
            .catch (err => {
                next(err)
            })
    }
}

module.exports = UserController