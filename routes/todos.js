const router = require ('express').Router()
const TodoController = require ('../controllers/todo')

router.post('/', TodoController.createTodo)
router.get('/', TodoController.showAllTodo)
router.get('/:id', TodoController.findTodo)
router.put('/:id', TodoController.editTodo)
router.patch('/:id', TodoController.changeStatusTodo)
router.delete('/:id', TodoController.deleteTodo)

module.exports = router