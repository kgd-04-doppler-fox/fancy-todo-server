function errorHandler (err, req, res, next) {
    if (err.name === "SequelizeValidationError"){
        res.status(400).json({msg: err.errors[0].message})
    } else if (err.name === "SequelizeUniqueConstraintError"){
        res.status(400).json({msg: "Email already use"})
    } else if (err.notFound === "error not found"){
        res.status(404).json({ error : "Error Not Found" })
    } else {
        res.status(500).json(err)
    }
}

module.exports = errorHandler