// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'qa':
  case 'test':
    module.exports = require('./config/webpack.qa');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.prod');
}


