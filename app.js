const express = require('express');
const TaskController = require('./controllers/task.controller');
const {castErrors, handlerErrors} = require('./middleware/handler.errors.mw');

const app = express();
app.use(express.json());

app.post('/tasks', TaskController.createTask);
app.get('/tasks', TaskController.getAllTasks);
app.get('/tasks/:taskId', TaskController.getTaskById);
app.patch('/tasks/:taskId', TaskController.updateTask);
app.delete('/tasks/:taskId', TaskController.deleteTask);

app.use(castErrors);
app.use(handlerErrors);

module.exports = app;