const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

    static logiUser (req, res, next) {
        const {email, password} = req.body
        User.findOne ({
            where : {
                email
            }
        }).then (user => {
            if (!user) {   
                throw {
                    name: `Wrong Email / Password`
                }
            }
            const validPassword = bcryptjs.compareSync(password, user.password)
            if (validPassword) {
                const accessToken = jwt.sign({
                    email : user.email,
                    id : user.id,
                }, process.env.JWT_SECRET)
                res.status(200).json({
                    accessToken
                })
            } else {
                throw {
                    name : `Wrong Email / Password`
                }
            }
        }).catch (err => {
            next(err)
        })
    }
}

module.exports = UserController