const mongoose = require('mongoose');
// connect to MongoDB and add ES6 global Promises to mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
