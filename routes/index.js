const router = require(`express`).Router()
const user = require(`./userRouter`)
const todo = require(`./todoRouter`)
const Controller = require (`../controllers/controller`)

router.get(`/`, Controller.home)
router.use(`/todos`, todo)
router.use(`/user`, user)

module.exports = router