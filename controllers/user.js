const {Todo, TodoUser, User} = require ('../models')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const {generateToken} = require ('../helpers/helpers')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID)



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

    static getUsers (req, res, next){
        const todoId = req.query.todo
        let usersData = null
        User
            .findAll()
            .then(users => {
                usersData = users
                return TodoUser.findAll({
                    where: {
                        TodoId: Number(todoId)
                    }, 
                    include: ['User', 'Todo']
                })
            })
            .then(result => {
                usersData.push(result)
                res.status(200).json(usersData)
            })
            .catch(err => {
                next(err)
            })
    }

    static userInProject(req, res, next){
        console.log(`didieu`)
        TodoUser
            .findAll({
                where: {
                    TodoId: req.params.id
                },
                include: ['User']
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }
}


module.exports = UserController