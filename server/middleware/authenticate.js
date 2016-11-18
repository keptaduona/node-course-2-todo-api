var {User} = require('./../models/user.js');

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');
  // take token and return it to verify me
  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send(); //this will catch above reject and also the reject from user.js try block
  });
};

module.exports = {authenticate};
