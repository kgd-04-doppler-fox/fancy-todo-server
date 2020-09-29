const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

class UserController {
    static async register (req, res, next) {
        const {email, password} = req.body
        try {
            const user = await User.create({
                email,
                password
            })
            res.status(201).json({
                id : user.id,
                email : user.email
            })
        } catch (error) {
            next(error)
        } {

        }
    }

    static async login (req, res, next) {
        const {email, password} = req.body
        try {
            const user = await User.findOne({ // nyari username dengan email tersebut di database
                where : {
                    email
                }
            })
            // console.log(user);

            if(user === null) { // kalau misalnya abis dicari didatabase nggak ada, brarti null, brarti lempar error ke catch next(err)
                throw {
                    name : "Wrong email / password"
                }
            }

            const validPassword = bcryptjs.compareSync(password, user.password) // membandingkan req.body password dengan hasil hash yang
                                                                              // didatabase

            if(validPassword){ // kalau validPass nya true , brarti hasil compare nya sesuai dan cocok, brarti user bisa dikirimin token
                // console.log(validPassword);
                const access_token = jwt.sign({
                    email : user.email,
                    id : user.id
                }, process.env.JWT_SECRET)
                console.log(access_token);
                res.status(200).json({
                    access_token
                })
            }
        } catch (error) {
            next(error)
        }

    }
}

module.exports = UserController