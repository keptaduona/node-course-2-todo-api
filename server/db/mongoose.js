const mongoose = require('mongoose');
// connect to MongoDB and add ES6 global Promises to mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
