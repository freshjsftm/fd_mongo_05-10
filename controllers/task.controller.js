const createHTTPError = require('http-errors')
const Task = require('../models/Task')

module.exports.createTask =  async (req, res, next)=>{
  try {
    const {body} = req;
    const newTask = await Task.create(body);
    res.status(201).send({data:newTask})
  } catch (error) {
    next(error)
  }
}

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).send({data:tasks})
  } catch (error) {
    next(error)
  }
}

module.exports.updateTask = async (req, res, next)=>{
  try {
    const {body, params:{taskId}} = req;
    const updatedTask = await Task.findByIdAndUpdate(taskId, body, {new:true, runValidators:true})
    if (!updatedTask) {
      return next(createHTTPError(404, "Task not found!"))
    }
    res.status(200).send({data:updatedTask})
  } catch (error) {
    next(error)
  }
}

module.exports.deleteTask = async (req, res, next)=>{
  try {
    const {params:{taskId}} = req;
    const deletedTask = await Task.findByIdAndRemove(taskId)
    if(!deletedTask){
      return next(createHTTPError(400, 'Bad request.'))
    }
    res.status(200).send({data:deletedTask})
  } catch (error) {
    next(error)
  }
}

module.exports.getTaskById = async (req, res, next)=>{
  try {
    const {params:{taskId}} = req;
    const task = await Task.findById(taskId)
    if(!task){
      return next(createHTTPError(404, 'Task not found.'))
    }
    res.status(200).send({data:task})
  } catch (error) {
    next(error)
  }
}