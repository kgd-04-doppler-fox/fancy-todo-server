const router = require('express').Router()
const ThirdPartyController = require('../controllers/thirdParty')

router.get('/videos?', ThirdPartyController.showAllData)


module.exports = router