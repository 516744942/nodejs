const fs = require('fs');
function Thunk(fileName) {
  return function (callback) {
    return fs.readFile(fileName, callback)
  }
}
Thunk('a.js')((error, res) => {
  console.log(error)
  console.log(res)
})
/**
 * Conversion
 * 转换
 */
var Thunk2 = function (fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}
 Thunk2(fs.readFile)('a.js')((err,data) => {
  console.log(111)
  console.log(err)
  console.log(data)
})

