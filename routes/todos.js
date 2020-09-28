const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo-controller')

router.get('/', TodoController.showAll)
router.post('/', TodoController.postTodo)
router.get('/:id', TodoController.byId)
router.put('/:id', TodoController.putTodo)
router.patch('/:id',TodoController.patchTodo)
router.delete('/:id', TodoController.delete)
module.exports = router