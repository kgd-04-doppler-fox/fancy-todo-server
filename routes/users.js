const router = require('express').Router()
const UsersController = require('../controllers/user-controller.js')

router.post('/register', UsersController.register)
router.post('/login',UsersController.login)
// router.post('/googleSignIn', UserController.googleSignIn)
module.exports = router