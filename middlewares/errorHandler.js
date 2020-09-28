exports.errorHandler = (err, req, res, next) => {
  if (err.name === 'SequelizeValidationError') {
    res.status(400).json({ msg: err.errors[0].message })
  } else if (err.todo === 'Todo with such id is not found.') {
    res.status(404).json(err)
  } else {
    res.status(500).json(err)
  }
}