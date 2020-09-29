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
        res.status(response.status).json({ weather: response.data.current.weather_descriptions[0] })
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
      })
      .catch(error => {
        next(error)
      });
  }

  static getLocalTime(req, res, next) {
    const params = {
      access_key: process.env.WEATHER_STACK,
      query: 'Paris'
    }

    axios.get('http://api.weatherstack.com/forecast', { params })
      .then(response => {
        const apiResponse = response.data;
        let time = apiResponse.location.localtime.split(' ')[1]
        res.status(response.status).json({ time })
      })
      .catch(error => {
        next(error)
      });
  }
}

module.exports = WeatherController