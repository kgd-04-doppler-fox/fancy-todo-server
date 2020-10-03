const router = require(`express`).Router()
const user = require(`./userRouter`)
const todo = require(`./todoRouter`)
const axios = require(`./axiosRouter`)
const Controller = require (`../controllers/controller`)


router.get(`/`, Controller.home)
router.use(`/todos`, todo)
router.use(`/users`, user)
router.use(`/features`, axios)


module.exports = router