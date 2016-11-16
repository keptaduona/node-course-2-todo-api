const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

// crud = create read update delete
// 1. use MIDDLEWARE - bodyparser to send json to express
app.use(bodyParser.json());
// 2. Configure express what to do when it receives a POST request
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
// 3. Save the POST request content
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

//GET
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
