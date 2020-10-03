const axios = require('axios')

class APIController {
  static getRandomQuote(req, res, next) {
    axios({
      "method": "GET",
      "url": "https://quotes15.p.rapidapi.com/quotes/random/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_API,
        "useQueryString": true
      }, "params": {
        "language_code": "en"
      }
    })
      .then((response) => {
        let quote = response.data.content
        let author = response.data.originator.name
        res.status(200).json({ quote, author, email: req.emailUser })
      })
      .catch((error) => {
        console.log(error)
        next(error)
      })
  }
}

module.exports = APIController