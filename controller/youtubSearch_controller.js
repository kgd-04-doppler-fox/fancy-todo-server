const axios = require ('axios')
const { response } = require('express')

class YoutubeSearch {
    static search (req,res,next) {
        axios({
            method : 'GET',
            url : "https://www.googleapis.com/youtube/v3/search",
            params: {
                key: req.query.key,
                type: req.query.type,
                part: req.query.part,
                maxResults: req.query.maxResults,
                q: req.query.q
            }
        })
        .then (response => {
            res.status(response.status).json(response.data)
        })
        .catch (err => {
            next(err)
        })
    }
}

module.exports = YoutubeSearch