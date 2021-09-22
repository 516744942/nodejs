const fs = require("fs");
function red(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      } else {
        console.log(data)
        resolve(data.toString())
      }
    })
  })
}
function write(file, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        console.log(data)
      }
    })
  })
}
red('a.json').then((data) => {
  console.log('promise result1111=' + data)
  console.log('type', typeof data)
  data = data.replace(/"b":\s+\d+,?/g, (res) => {
    console.log('replaceres', res)
    return ''
  })
  data = { ...JSON.parse(data), c: 1 }
  write('b.json', JSON.stringify(data))
}).catch((err) => {
  console.log('promise reject=' + err)
}).then(res => {
})