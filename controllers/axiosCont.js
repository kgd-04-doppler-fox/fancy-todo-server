const axios = require(`axios`)
const fs = require(`fs`)
// const file = require(`../todos.json`)

class AxiosController {
    static feature(req, res, next) {

        axios({
            method: `GET`,
            url: `https://www.boredapi.com/api/activity/`
        })
            .then(response => {
                res.status(response.status).json(response.data.activity)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = AxiosController