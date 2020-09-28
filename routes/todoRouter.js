const router = require(`express`).Router()
const TodoController = require(`../controllers/todoCont`)


router.get(`/`, TodoController.allTodo)
router.post(`/`, TodoController.addTodo)


module.exports = router