const router = require('express').Router()

const WeatherController = require('../controllers/WeatherController')
const { authentication } = require('../middlewares/authentication')

router.get('/weather', authentication, WeatherController.getWeatherByCity)
router.get('/clock', authentication, WeatherController.getLocalTime)

module.exports = router