const router = require('express').Router()

const TodoController = require('../controllers/TodoController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/', authentication, TodoController.postAddTodo)
router.get('/', authentication, TodoController.showAllTodo)
router.get('/:id', authentication, TodoController.showTodoById)
router.put('/:id', authentication, authorization, TodoController.putTodoById)
router.patch('/:id', authentication, authorization, TodoController.patchTodoById)
router.delete('/:id', authentication, authorization, TodoController.deleteTodoById)

module.exports = router