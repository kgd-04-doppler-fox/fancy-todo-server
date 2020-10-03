const {User} = require ('../models')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const {generateToken} = require ('../helpers/helpers')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID)



class UserController {
    static register(req, res, next){
        console.log(req.body)
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
                console.log(user.password)
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

    static googleSignIn (req, res, next){
        let payload = null
        client.verifyIdToken({
                idToken: req.body.access_token,
                audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            payload = ticket.getPayload()
            return User.findOne({
                where : {
                    email: payload.email
                }
            })
        })
        .then(user => {
            if (!user){
                User.create({
                    fullName: payload.name,
                    email: payload.email,
                    password: process.env.SECRET_PASSWORD
                })
            } else {
                return user
            }
        })
        .then (user => {
            const access_token = generateToken(user)
            res.status(200).json({access_token})
        })
        .catch(err => {
            throw err
        })
    }
}


module.exports = UserController