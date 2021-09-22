// const exports = module.exports = {}
exports.sayHelloInEnglish = function () {
  return "HELLO"
}
exports.sayHelloInChinese = function () {
  return "你好"
}
// module.exports = {
//   sayHelloInEnglish1 : function () {
//     return "HELLO"
//   },
//   sayHelloInEnglish2 : function () {
//     return "HELLO"
//   }
// }
/**
 * 记住 exports 和module.exports 引用的是相同的对象
 */
