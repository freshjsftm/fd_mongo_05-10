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
    const updatesTask = await Task.findByIdAndUpdate(taskId, body, {new:true, runValidators:true})
    res.status(200).send({data:updatesTask})
  } catch (error) {
    next(error)
  }
}