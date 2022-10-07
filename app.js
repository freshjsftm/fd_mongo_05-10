const express = require('express');
const TaskController = require('./controllers/task.controller');
const app = express();
app.use(express.json());

app.post('/tasks', TaskController.createTask);
app.get('/tasks', TaskController.getAllTasks);

app.use((err, req, res, next)=>{
  const status = err.status || 500;
  res.status(status).send(err.message || 'Server errors')
});

module.exports = app;