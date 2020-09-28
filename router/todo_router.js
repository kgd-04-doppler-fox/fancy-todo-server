const router = require ('express').Router ();
const ToDoController = require ('../controller/todo_controller.js')

router.get ('/',ToDoController.getToDo)
router.post ('/',ToDoController.createToDo)
router.get ('/:id',ToDoController.getToDoById)
router.put ('/:id',ToDoController.updateToDoByIdPut)
router.patch ('/:id',ToDoController.updateToDoByIdPatch)
router.delete ('/:id',ToDoController.deleteToDo)

module.exports = router