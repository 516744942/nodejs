/**
 * require是一个函数 参数是模块标识符
 * require函数的返回值是module.exports对象
 * require函数是模块的标识,模块标识有两种
 * 如果是node.js模块 要发布在npm上
 * 如果是自定义的本地模块,则是带有相对路径的
 * 
 */

const exports1 = require('./module1')
const exports3 = require('./module3')
console.log(exports1.sayHelloInEnglish())
console.log(exports1.sayHelloInChinese())
console.log('exports3',exports3)


