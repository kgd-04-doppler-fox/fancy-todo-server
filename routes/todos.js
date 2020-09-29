const router = require ('express').Router()
const TodoController = require ('../controllers/todos')
const authentication = require ('../middleware/authentication')
const authorization = require ('../middleware/authorized')

router.post('/', authentication, TodoController.createTodo)
router.get('/', authentication, TodoController.findAll)
router.get('/:id', authentication, TodoController.findById)
router.put('/:id', authentication, authorization, TodoController.editTodo)
router.patch('/:id', authentication, authorization, TodoController.changeStatusTodo)
router.delete('/:id', authentication, authorization, TodoController.deleteTodo)

module.exports = router