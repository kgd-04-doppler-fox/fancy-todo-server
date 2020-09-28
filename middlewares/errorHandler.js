function errorHandler (err, req, res, next) {
    console.log('error dari handler', err)
    if (err.name === "SequelizeValidationError") {
        res.status(400).json({ msg: err.errors[0].message })
    } else if (err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({msg})
    } else {
        res.status (500).json(err)
    }
}


module.exports = errorHandler