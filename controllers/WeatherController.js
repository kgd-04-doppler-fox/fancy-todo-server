const axios = require('axios')

class WeatherController {
  static getWeatherByCity(req, res, next) {
    const params = {
      access_key: process.env.WEATHER_STACK,
      query: 'Paris'
    }

    axios.get('http://api.weatherstack.com/forecast', { params })
      .then(response => {
        const apiResponse = response.data;
        res.status(response.status).json(response.data)
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
      })
      .catch(error => {
        next(error)
      });
  }
}

module.exports = WeatherController