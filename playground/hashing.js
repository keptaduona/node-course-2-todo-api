// npm install jsonwebtoken
const {SHA256} = require('crypto-js'); //just playground
// var message = 'begemotas';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
// // JSON WEB TOKEN
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }

// RAEL SHIT STARTS NOW
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$qPLD43EXo3m7JiuUA0XbKe6CzVtqG8Atw0IYdIoG2q1MnS2IYTQNG';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
//

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc'); // create the token for user
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
