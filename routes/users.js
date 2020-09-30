const router = require ('express').Router()
const authentication_google = require ('../middleware/authenticaton_google')
const UserController = require ('../controllers/user')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleSignIn', authentication_google, UserController.login)


module.exports = router