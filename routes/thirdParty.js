const router = require('express').Router()
const ThirdPartyController = require('../controllers/thirdParty')

router.get('/trending', ThirdPartyController.trending)

module.exports = router