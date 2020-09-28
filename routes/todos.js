const router = require ('express').Router()
const TodoController = require ('../controllers/todos')

router.post('/', TodoController.createTodo)
router.get('/', TodoController.findAll)
router.get('/:id', TodoController.findById)
router.put('/:id', TodoController.editTodo)
router.patch('/:id', TodoController.editTodo)
router.delete('/:id', TodoController.deleteTodo)

module.exports = router