function errorHandlers(err, req, res, next) {
    console.log(`Error Middlewares!`, err)
    if (err.name === 'SequelizeValidationError') {
        res.status(400).json({msg : err.errors[0].message})
    }else if(err.name === `SequelizeUniqueConstraintError`){
        res.status(400).json({msg : err.parent.detail})
    }else if (err.name === `SequelizeDatabaseError`){
        res.status(400).json({msg : err.parent.parameters[3]})
    }
    else {
        res.status(500).json(err)
    }
}

module.exports = errorHandlers