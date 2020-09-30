const axios = require('axios')
const { User } = require('../models')

class WeatherController {
  static getWeatherByCity(req, res, next) {
    const params = {
      access_key: process.env.WEATHER_STACK,
    }

    let city
    User.findOne({ where: { id: req.decodedUser.id } })
      .then(user => {
        city = user.city
        return axios.get(`http://api.weatherstack.com/forecast?query=${city}`, { params })
      })
      .then(response => {
        const apiResponse = response.data;
        res.status(response.status).json({
          weather: apiResponse.current.weather_descriptions[0],
          temperature: apiResponse.current.temperature
        })
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
      })
      .catch(error => {
        next(error)
      });
  }

  static getLocalTime(req, res, next) {
    const params = {
      access_key: process.env.WEATHER_STACK,
      query: req.query.query
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