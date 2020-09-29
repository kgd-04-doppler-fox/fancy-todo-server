const axios = require(`axios`)
const fs = require(`fs`)
const file = require (`../todos.json`)

class AxiosController {
    static feature(req,res,next){
        console.log(req.query)
        axios({
            method: `GET`,
            url: `https://api.prexview.com/v1/transform`,
            headers: {
                Authorization: process.env.PREXVIEW_KEY 
            },
            body: {
                json : file,
                template : `template-name`,
                output : 'pdf'
            }
        })
        .then(response=>{
            res.status(response.status).json(response.data)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = AxiosController