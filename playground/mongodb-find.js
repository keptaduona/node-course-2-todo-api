//const MongoClient = require('mongodb').MongoClient;
//ES6 Object Destructuring
const {MongoClient, ObjectID} = require('mongodb');
//Store mongodb MongoClient and ObjectID classes into corresponding variables
//making a local connection for training purposes
//in production example we would connect to heroku or aws
MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
    //with return we are preventing later code from executing
    //it's the same as using an else statement, but shorter
  }
  console.log('Connected to MongoDB Server.');

  //db.collection('Todos').find() //find all todos, return a pointer to the documents
  // db.collection('Todos').find({
  //   _id: new ObjectID('582997adb8ca2510a09037ea')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('User').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('User').find({name: 'Matas'}).count().then((count) => {
    console.log(`User count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch user', err);
  });

  //db.close();
  //close connection
});
