const router = require ('express').Router ();
const ToDoController = require ('../controller/todo_controller.js')
const authentication = require ('../middleware/authentication')
const authorization = require ('../middleware/authorization')

router.use(authentication)
router.get ('/',ToDoController.getToDo)
router.post ('/',ToDoController.createToDo)
router.get ('/:id',authorization,ToDoController.getToDoById)
router.put ('/:id',authorization,ToDoController.updateToDoByIdPut)
router.patch ('/:id',authorization,ToDoController.updateToDoByIdPatch)
router.delete ('/:id',authorization,ToDoController.deleteToDo)

module.exports = router