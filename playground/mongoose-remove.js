const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

Todo.findOneAndRemove(_id: '582cc41635e282584fb982d8').then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('582cc41635e282584fb982d8').then((todo) => {
  console.log(todo);
})
