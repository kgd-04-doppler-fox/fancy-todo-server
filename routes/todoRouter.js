const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const TodoController = require('../controllers/todoController')

router.use(authentication)
router.get('/', TodoController.findAll)
router.post('/', TodoController.addTodo)
router.get('/:id' ,TodoController.findOne)
router.put('/:id', authorization ,TodoController.updateData)
router.patch('/:id' , authorization , TodoController.updateStatus)
router.delete('/:id' , authorization ,TodoController.deleteData)

module.exports = router
