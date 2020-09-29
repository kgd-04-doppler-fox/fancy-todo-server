const jwt = require('jsonwebtoken')
const { User } = require('../models')

function authentication (req, res, next) {
    const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
    // console.log(decoded);

    // pengecekan ke database, apakah usernya masih ada
    
    if(decoded){
        User.findByPk(decoded.id)
        .then(user => {
            if(user){
                req.decodedUser = decoded
                next()
            } else {
                next({
                    name : "unauthorized access"
                })
            }
        })
        .catch(err => {
            next(err)
        })
    } else {
        next({
            name : "unauthorized access"
        })
    }
}

module.exports = authentication