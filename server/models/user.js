const mongoose = require('mongoose');
// User
// email - require - trim it - set type - set min length of 1
var  User = mongoose.model('User', {
  email: {
    // Type is String but mongoose will cast numbers and bools to strings
    type: String,
    // add validator
    required: true,
    minlength: 1,
    trim: true // deletes all the unnecesary spaces in a string
  },
});

module.exports = {User};
