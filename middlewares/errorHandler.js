exports.errorHandler = (err, req, res, next) => {
  if (err.name === 'SequelizeValidationError') {
    res.status(400).json({ msg: err.errors[0].message })
  } else if (err.todo === 'Todo with such id is not found.') {
    res.status(404).json(err)
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({ msg: 'Email has been taken.' })
  } else if (err.msg === 'Wrong email or password.') {
    res.status(400).json(err)
  } else if (err.msg === 'Email has not been registered yet.') {
    res.status(404).json(err)
  } else if (err.msg === 'Todo not found!') {
    res.status(404).json(err)
  } else if (err.msg === 'Unauthorized.') {
    res.status(401).json(err)
  } else {
    res.status(500).json(err)
  }
}