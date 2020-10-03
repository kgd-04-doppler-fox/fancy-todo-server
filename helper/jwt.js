const jwt = require('jsonwebtoken')

function generateToken(payload) {
    console.log(process.env.SECRET);
    return jwt.sign(payload,process.env.JWT_SECRET)
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { generateToken, verifyToken }