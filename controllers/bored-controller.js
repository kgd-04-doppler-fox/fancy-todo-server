const axios = require('axios')
const { Todo } = require('../models')

class BoredController {
  static randomizeTodo(req, res, next) {
    axios({
      url: "http://www.boredapi.com/api/activity",
    })
      .then(response => {
        let data = response.data
        let today = new Date()
        today.setDate(today.getDate() + 1)
        return Todo.create({
          title: data.type,
          description: data.activity,
          status: false,
          due_date: today,
          UserId: req.decodedUser.id
        })
      })
      .then(todo => {
        console.log(todo)
        res.status(201).json(todo)
      })

      .catch(err => {
        next(err)
      })
  }
}

module.exports = BoredController