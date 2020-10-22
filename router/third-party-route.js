const router = require ('express').Router()
const YoutubeSearch = require ('../controller/youtubSearch_controller')

router.get('/',YoutubeSearch.search)

module.exports = router