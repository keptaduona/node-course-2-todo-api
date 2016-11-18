const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
// User
// email - require - trim it - set type - set min length of 1
var UserSchema = new mongoose.Schema({
  email: {
    // Type is String but mongoose will cast numbers and bools to strings
    type: String,
    // add validator
    required: true,
    minlength: 1,
    trim: true, // deletes all the unnecesary spaces in a string
    unique: true, // so we cant have 2 same emails
    // setup custom validation with mongoose validation
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    },
  },
  password: {
    type:String,
    require: true,
    minLength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// modify what we send back to the user as a response after authentication
UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};
// create isntance method for authentication
UserSchema.methods.generateAuthToken = function() {
  var user = this;
  console.log(user);
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  })
};

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth' //need quotes when we're calling something with a .(dot)
  });
};

var  User = mongoose.model('User', UserSchema);

module.exports = {User};
