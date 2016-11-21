const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo.js');
const {User} = require('./../../models/user.js');
const jwt = require('jsonwebtoken');

// Add seed data[create users](todos that wont get removed by beforeEach)
// User 1 is a real user and User 2 is fake(doesn't have a token)
// Store ID's so we can use them for verifying jsonwebtoken
const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'andrew@example.com',
  password: 'userOnepass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'matas@example.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
  }]
}];

// Add seed data(todos that wont get removed by beforeEach)
const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId
  }, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333,
  _creator: userTwoId
}];

const populateTodos = (done) => {
  Todo.remove({/*an empty object will remove everything*/}).then(() => {
    return Todo.insertMany(todos) //add SEED data
  }).then(() => done());
};

const populateUsers =  (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();
    //wait for all promises to succeed, call .then on all
    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}
