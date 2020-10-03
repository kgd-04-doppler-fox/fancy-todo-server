const router = require('express').Router()

const APIController = require('../controllers/APIController')
const authentication = require('../middlewares/authentication')

router.get('/quote', authentication, APIController.getRandomQuote)

module.exports = router