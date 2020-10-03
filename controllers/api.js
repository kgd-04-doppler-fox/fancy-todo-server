const axios = require ('axios')

class API {
    static location (req, res, next) {
        const location = req.body.location
        axios ({
            url : `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyC_w1bsClvuRzMaPNsrVXmoJ7AVHen1qu4`
        })
        .then(response => {
            console.log(response)
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({err})
        })
   
    }
}

module.exports = API