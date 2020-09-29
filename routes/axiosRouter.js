const router = require(`express`).Router()
const AxiosController = require(`../controllers/axiosCont`)

router.get(`/`, AxiosController.feature)

module.exports = router