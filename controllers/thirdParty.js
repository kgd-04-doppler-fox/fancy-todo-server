const axios = require('axios')
const {Todo} = require('../models')

class ThirdPartyController{

  static trending(req, res, next){
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
      responseType: 'json'
    })
    .then(response => {
      res.status(response.status).json(response.data.results)
    })
    .catch(err => {
      next(err)
    })
  }


}


module.exports = ThirdPartyController