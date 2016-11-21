var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  var config = require('./config.json'); //auto converts to Object
  var envConfig = config[env];
  // stores object keys to array
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
};
