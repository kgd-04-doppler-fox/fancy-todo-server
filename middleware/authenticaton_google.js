const jwt = require ('jsonwebtoken')
const { User } = require ('../models')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

function authenticationGoogle (req, res, next){
    const currentToken = req.headers.access_token
    let dataUser 

    client.verifyIdToken({
        idToken : currentToken,
        audience : process.env.CLIENT_ID
    })
    .then (data => {
        dataUser = data
        return User.findOne({where : {email:data.payload.email}})
    })
    .then(user => {
        if (user === null){
            res.body = dataUser
            res.redirect('/register')
        }
        else {
            next()
        }
    })
    .catch (err => {
        next(err)
    })
    
}

module.exports = authenticationGoogle