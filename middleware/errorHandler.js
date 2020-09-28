function errorHandler (err, req, res, next) {
    if (err.name === "SequelizeValidationError"){
        res.status(400).json({ msg: err.errors[0].message })
    } 
    else {
        res.status (500).json(err)
    }
}


module.exports = errorHandler