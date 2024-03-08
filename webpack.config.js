const path = require('path');

module.exports = {
  resolve: {
    root: path.resolve('./'),
    modules: [path.resolve(__dirname, './'), "node_modules"]
  }
}