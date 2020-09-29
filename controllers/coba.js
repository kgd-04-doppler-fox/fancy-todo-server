const axios = require ('axios')

class Axios {
    static axios (req, res, next){
        axios ({
            method : 'GET',
            url : `https://api.geodatasource.com/city?key=${process.env.geodata_key}&format=json&lat=${req.query.lat}&lng=${req.query.lng}`
        })
        .then(response => {
            console.log(response.data)
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = Axios