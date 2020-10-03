const router = require ('express').Router()
const UserController = require ('../controllers/user')

router.post('/register', UserController.registerUser)
router.post('/login', UserController.loginUser)
router.post('/googlesign', UserController.googleSign)


module.exports = router