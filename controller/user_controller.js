const { User } = require ('../models')
const bcryptjs = require ('bcryptjs')

class UserController {
    static async register (req,res,next) {
        const { email,password } = req.body
        try {
            const user = await User.create ({
                email,
                password
            })
            res.status(201).json ({
                id : user.id,
                email : user.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async login (req,res,next) {
        const { email,password } = req.body
        try {
            const user = await User.findOne ({
                where : {
                    email
                }
            })
            if (user === null){
                throw {
                    message: 'Wrong email/password'
                }
            }
            const validPassword = bcryptjs.compareSync(password, user.password)
            if (validPassword) {
                res.status(201).json ({
                    access_token: 'fake token'
                })
            } else {
                throw {
                    message: 'Wrong email/password'
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController