const router = require(`express`).Router()
const TodoController = require(`../controllers/todoCont`)


router.get(`/`, TodoController.allTodos)
router.post(`/`, TodoController.addTodos)
router.get(`/:id`, TodoController.getById)
router.patch(`/:id`, TodoController.patchTodos)
router.put(`/:id`, TodoController.putTodos)
router.delete(`/:id`, TodoController.deleteTodos)

module.exports = router