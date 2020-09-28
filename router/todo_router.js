const router = require ('express').Router ();
const ToDoController = require ('../controller/todo_controller.js')

router.get ('/',ToDoController.getToDo)
router.post ('/',ToDoController.createToDo)

module.exports = router