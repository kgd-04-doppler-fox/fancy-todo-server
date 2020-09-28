function errorHandler(err, req, res, next) {
    if (err.name == "SequelizeValidationError") {
        res.status(400).json({ message: err.errors[0].message })
    } else if (err.name == "Error") {
        res.status(404).json({ message: "data not found !!" })
    } else {
        res.status(500).json(err)
    }
}

module.exports = errorHandler