const router = require('express').Router()
const BoredController = require('../controllers/bored-controller.js')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', authentication, BoredController.randomizeTodo)

module.exports = router