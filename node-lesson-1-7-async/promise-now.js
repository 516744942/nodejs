const fs = require("fs");
function hello(file) {
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
hello('a.js').then((data) => {
  console.log('promise result=' + data)
}).catch((err) => {
  console.log('promise reject=' + err)

})
hello('a.json').then((data) => {
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

/**
 * 封装API
 */

/**
* 约定函数的返回值
* 为了简化编程的复杂性,我们约定每个函数的返回值都得是promise
* 这样将无限个对象连接在一起
*/

function hello(file) {
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
function world(file) {
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

function log(data) {
  console.log('data', data)
  return new Promise((resolve, reject) => {
    console.log('promise result =' + data)
    resolve(data)
  })
}

hello('a.js').then(log).then((res) => {
  console.log('最后', res)
  return world('a.js').then(log)
}).then((res) => {
  console.log('是什么呢', res)
})
  .catch((err) => {
    console.log(err)
  })
/**
 * 链式写法
 * 每个Promise都有then方法,也就是说,
 * then方法在原型对象Promise.prototype上的,
 * 它的作用是为Promise实例添加状态改变时的回调函数
 */
Promise.prototype.then = function (sucess, fail) {
  // this.done(sucess);
  this.fail(fail)
  return this
}

/**
 * 把每个操作都放到独立文件里变成模块的版本
 * 核心是使用require-directory
 * 把一个文件里有很多文件时,可以把某个文件夹内的多个文件挂载到同一个对象上
 * require-directory模块的原理是递归遍历文件,读取具体文件,
 * 就将文件挂在它的返回值对象上
 */

