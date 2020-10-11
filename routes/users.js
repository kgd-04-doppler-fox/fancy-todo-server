const router = require ('express').Router()
const authentication = require ('../middleware/authentication')
const UserController = require ('../controllers/user')

router.get('/users', authentication, UserController.getUsers)
router.get('/projectMembers/:id', authentication, UserController.userInProject)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleSignIn', UserController.googleSignIn)




module.exports = router