const TodoController = require('../controllers/TodoController')

const router = require('express').Router()

router.post('/', TodoController.postAddTodo)
router.get('/', TodoController.showAllTodo)
router.get('/:id', TodoController.showTodoById)
router.put('/:id', TodoController.putTodoById)
router.patch('/:id', TodoController.patchTodoById)
router.delete('/:id', TodoController.deleteTodoById)

module.exports = router