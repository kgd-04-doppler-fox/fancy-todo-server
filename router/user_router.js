const router = require ('express').Router ();
const UserController = require ('../controller/user_controller');

router.post('/register',UserController.register);
router.post('/login',UserController.login)
router.post('/googleSignIn',UserController.googleSignIn)

module.exports = router