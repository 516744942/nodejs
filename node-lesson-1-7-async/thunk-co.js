const co = require('co')
const fs = require('fs')
const thunkify = require('thunkify')
const Promise = require('es6-promise').Promise;
function readFile(path, encoding) {
  return function (cb) {
    fs.readFile(path, encoding, cb)
  }
}
const readFile2 = thunkify(fs.readFile)

co(function* () {
  var a = yield readFile2('a.js', { encoding: 'utf8' })
  console.log(a)
  var b = yield readFile2('b.text', { encoding: 'utf8' })
  console.log(b)
  return yield Promise.resolve(a + b)
}).then((value) => {
  console.log('value',value)
}).catch(err => {
  console.log(err)
})