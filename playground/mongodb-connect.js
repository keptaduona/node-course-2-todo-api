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

  //insert a new record into the collection
  // db.collection('Todos').insertOne({ //insertOne inserts a record
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   //.ops returns the whole record
  // });

  //Insert new doc into Users (name, age, location)
  // db.collection('User').insertOne({
  //   //_id: 123, we can insert a custom id like this
  //   name: 'Matas',
  //   age: 22,
  //   location: 'Lithuania'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert User', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   //access the ID and get the time of creation
  // });


  db.close();
  //close connection
});
