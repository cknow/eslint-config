const path = require('path')

module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: path.resolve('./plugins/ava.js')
}
