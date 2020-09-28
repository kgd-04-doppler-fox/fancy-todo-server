function errorHandlers(err, req, res, next) {
    console.log(`Error Middlewares!`)
    if (err.name === 'SequelizeValidationError') {
        res.status(400).json({msg : err.errors[0].message})
    }else if(err.name === `SequelizeUniqueConstraintError`){
        res.status(400).json({msg : `Email already taken`})
    }
    else {
        res.status(500).json(err)
    }
}

module.exports = errorHandlers