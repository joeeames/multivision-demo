var path = require('path')
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath
  },
  production: {
    db: 'mongodb://jeames:multivision@ds053808.mongolab.com:53808/multivision',
    rootPath: rootPath
  }
}