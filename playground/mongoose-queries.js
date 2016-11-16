const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '582c907b2a93ab5c1dbf23b811';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id   // mongoose will convert the string to ID object
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '582c52aa3ccd5e7418df4349';

User.findById(id).then((user) => {
  if (!user) {
    return console.log(JSON.stringify(user, undefined, 2));
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
