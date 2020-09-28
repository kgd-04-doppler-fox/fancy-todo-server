const router = require('express').Router()

const TodoController = require('../controllers/todoController')

router.get('/todos', TodoController.findAll)
router.post('/todos', TodoController.addTodo)
router.get('/todos/:id', TodoController.findOne)
router.put('/todos/:id', TodoController.updateData)
router.patch('/todos/:id', TodoController.updateStatus)
router.delete('/todos/:id', TodoController.deleteData)

module.exports = router