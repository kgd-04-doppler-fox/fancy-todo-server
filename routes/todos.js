const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo-controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', authentication, TodoController.showAll)
router.post('/', authentication, TodoController.postTodo)
router.get('/:id', authentication, authorization, TodoController.findById)
router.put('/:id', authentication, authorization, TodoController.putTodo)
router.patch('/:id', authentication, authorization, TodoController.patchTodo)
router.delete('/:id', authentication, authorization, TodoController.delete)

module.exports = router