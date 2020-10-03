const jwt = require ('jsonwebtoken')
const secret = process.env.JWT_SECRET


function generateToken (payload){
    const access_token = jwt.sign({
        email: payload.email,
        id: payload.id
    }, secret)
    
    return access_token
}

function verifyToken (token){
    const verify_token = jwt.verify(token, secret)
}


module.exports = {
    generateToken,
    verifyToken
}