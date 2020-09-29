function errorHandler (err, req, res, next) {
    if (err.name === "SequelizeValidationError"){
        res.status(400).json({ msg: err.errors[0].message })
    } else if (err.name === `error not found`){
        res.status(404).json({msg : `${err.name}`})
    } else if (err.name === 'unauthorized user'){
        res.status(401).json({msg : `${err.name}`})
    }
    else {
        res.status (500).json(err)
    }
}


module.exports = errorHandler