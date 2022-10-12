const mongoose = require('mongoose');
const {contentSchema} = require('../utils/validate');
const {Schema} = mongoose;

const commentSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Description required'],
    validate: {
      validator: (v) => contentSchema.isValid(v),
      message: props => `${props.value} is not a valid description!`
    },
  },
  task: {
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }
},{
  versionKey: false,
  timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;