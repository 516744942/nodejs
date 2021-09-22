const requireDirectory = require('require-directory');
module.exports = requireDirectory(module)


const fs = require('fs');

module.exports = function hello(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.toString())
      }
    })
  })
}