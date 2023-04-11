const Comment = require('../models/Comment');

module.exports.createComment = async(req, res, next)=>{
  try {
    const {body, params:{taskId}} = req;
    const comment = await Comment.create({...body, task: taskId})
    res.status(201).send({data: comment})
  } catch (error) {
    next(error)
  }
}

module.exports.getAllComments = async(req, res, next) => {
  try {
    const comments = await Comment.find()
    res.status(200).send({data: comments})
    // Comment.find().populate('task').exec((err, comments)=>{
    //   if(err){
    //     return next(err)
    //   }
    //   res.status(200).send({data: comments})
    // })
  } catch (error) {
    next(error)
  }
}
