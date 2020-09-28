const router = require(`express`).Router()
const UserController = require(`../controllers/userCont`)


router.get(`/`, UserController.login)
router.post(`/`, UserController.register)


module.exports = router