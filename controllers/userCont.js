const { User } = require(`../models/index`)
const bcryptjs = require(`bcryptjs`)

class UserController {
    static async login(req, res, next) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (user === null) {
                throw {
                    name: `Wrong email/password`
                }
            }
            const validPassword = bcryptjs.comparedSync(password, user.password) //compare body with hash bcryptjs

            if (validPassword) {
                const access_token = jwt.sign({
                    email: user.email,
                    id: user.id
                }, process.onv.JWT_SECRET)
                
                res.status(200).json({
                    access_token
                })
            } else {
                throw {
                    name: `Wrong email/password`
                }
            }
        }
        catch (err) {
            next(err)
        }
    }

    static async register(req, res, next) {
        const { email, password } = req.body
        try {
            const user = await User.create(
                {
                    email,
                    password
                }
            )
            res.status(201).json({ user })
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = UserController