const axios = require(`axios`)

class RepoController {
    static createRepo(req,res,next){

        axios({
            method: `POST`,
            url: `https://api.github.com/user/repos`,
            data : {
                name : req.body.name
            },
            headers: {
                Accept: ``,
                Authorization : ``
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

module.exports = RepoController