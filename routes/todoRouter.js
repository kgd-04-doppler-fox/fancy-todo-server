const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const TodoController = require('../controllers/todoController')

router.get('/', authentication, TodoController.findAll)
router.post('/', authentication, TodoController.addTodo)
router.get('/:id', TodoController.findOne)
router.put('/:id', TodoController.updateData)
router.patch('/:id', TodoController.updateStatus)
router.delete('/:id', TodoController.deleteData)

module.exports = router