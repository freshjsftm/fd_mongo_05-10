const mongoose = require('mongoose');
const {emailSchema,contentSchema,nameSchema} = require('../utils/validate')
const {Schema} = mongoose;

const taskSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Content required'],
    validate: {
      validator: (v) => contentSchema.isValid(v),
      message: props => `${props.value} is not a valid content!`
    },
  },
  isDone: {
    type: Boolean,
    default: false,
   },
  deadLine:{
    type: Date, 
    default: Date.now
  },
  author:{
    name:{
      type: String,
      validate: {
        validator: (v) => nameSchema.isValid(v),
        message: props => `${props.value} is not a valid name author!`
      },
    },
    age:{type: Number},
    email:{
      type: String,
      validate:{
        validator: (v) => emailSchema.isValid(v),
        message: props => `${props.value} is not a valid email!`
      }
    }
  }
},{
  versionKey: false,
  timestamps: true
})   

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;