const axios = require('axios')

function searchSnack (snacks){
        axios({
            method : "GET",
            url : "https://developers.zomato.com/api/v2.1/search?q=" + snacks,
            headers : {
                Accept: "application/json",
                "user-key": process.env.TOKEN_ZOMATO
            }
        })
        .then(response => {
            console.log(response);
            return response.data[0].name
            // res.status(response.status).json(response.data[0].name)
            // console.log(response.data[0].name);
        })
        .catch(err => {
            next(err)
        })
    }


module.exports = searchSnack