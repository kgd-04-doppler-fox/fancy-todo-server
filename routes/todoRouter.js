const router = require(`express`).Router()
const TodoController = require(`../controllers/todoCont`)
const authentication = require(`../middlewares/authentication`)

router.use(authentication)
router.get(`/`, TodoController.allTodos)
router.post(`/`, TodoController.addTodos)
router.get(`/:id`, TodoController.getById)
router.patch(`/:id`, TodoController.patchTodos)
router.put(`/:id`, TodoController.putTodos)
router.delete(`/:id`, TodoController.deleteTodos)

module.exports = router