const axios = require('axios')

class ThirdPartyController{

    static showAllData(req, res, next){ 

        axios({
            method: 'get',
            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.API_KEY}&q=${req.query.any}`,
            responseType: 'json'
          })
            .then(function (response) {
              res.status(response.status).json(response.data)
            })
            .catch(err =>{
                next(err)
            })

    }

}


module.exports = ThirdPartyController