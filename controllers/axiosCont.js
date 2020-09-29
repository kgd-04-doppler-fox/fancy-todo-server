const axios = require(`axios`)

class AxiosController {
    static feature(req,res,next){
        console.log(req.query)
        axios({
            method: `GET`,
            url: `https://developers.zomato.com/api/v2.1/search?q=` + req.query.food,
            headers: {
                "user-key": process.env.ZOMATO_KEY 
            }
        })
        .then(response=>{
            console.log(response)
            res.status(response.status).json(response.data)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = AxiosController