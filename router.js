const {Router} = require('express');
const TaskController = require('./controllers/task.controller');

const router = Router();

router.route('/')
      .post(TaskController.createTask)
      .get(TaskController.getAllTasks);

router.route('/:taskId')
    .get(TaskController.getTaskById)
    .patch(TaskController.updateTask)
    .delete(TaskController.deleteTask);

module.exports = router;