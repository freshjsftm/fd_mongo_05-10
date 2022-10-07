const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Content required'],
    validate: {
      validator: function(v) {
        return /[\sa-z0-9]+/i.test(v);
      },
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
        validator: function(v) {
          return /^[A-Z][a-z]{2,15}$/.test(v);
        },
        message: props => `${props.value} is not a valid name author!`
      },
    },
    age:{type: Number}
  }
},{
  versionKey: false,
  timestamps: true
})   

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;