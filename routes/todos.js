const router = require ('express').Router()
const TodoController = require ('../controllers/todo')

const authentication =  require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/', authentication, TodoController.createTodo)
router.get('/', authentication, TodoController.showAllTodo)
router.get('/:id', authentication, TodoController.findTodo)
router.put('/:id', authentication, authorization, TodoController.editTodo)
router.patch('/:id', authentication, authorization, TodoController.changeStatusTodo)
router.delete('/:id', authentication, authorization, TodoController.deleteTodo)

module.exports = router