const router = require ('express').Router()
const UserController = require ('../controllers/user')

router.post('/register', UserController.registerUser)
router.post('/login', UserController.logiUser)


module.exports = router