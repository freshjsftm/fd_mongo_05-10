const {Router} = require('express');
const TaskController = require('./controllers/task.controller');
const CommentController = require('./controllers/comment.controller');

const router = Router();

router.route('/')
      .post(TaskController.createTask)
      .get(TaskController.getAllTasks);

router.route('/:taskId')
    .get(TaskController.getTaskById)
    .patch(TaskController.updateTask)
    .delete(TaskController.deleteTask);

router.route('/:taskId/comments')
    .post(CommentController.createComment)

// router.route('/comments')   
//     .get(CommentController.getAllComments)

module.exports = router;