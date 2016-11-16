const mongoose = require('mongoose');
// Create a new model
var  Todo = mongoose.model('Todo', {
  text: {
    // Type is String but mongoose will cast numbers and bools to strings
    type: String,
    // add validator
    required: true,
    minlength: 1,
    trim: true // deletes all the unnecesary spaces in a string
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
