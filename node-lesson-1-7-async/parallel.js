/**
 * 我们希望程序能够快速执行完成,因此可以使用并行方式
 * 下面是一个简单的并行任务的示例
 * 有时候任务1线执行完,有时候任务2先执行完
 * 两个任务是并行的,哪个任务的任务的耗时短就先哪个任务先执行完
 * 明显异步任务效率更高,但结果不一定是我们想要的,异步执行的结果具有一定的不确定性
 * 
 */
const fs = require('fs');
const path = './a'
let arr1 = []
let arr2= []
let reg = /^koa/i
// 任务一
fs.readdir(path, function (err, files) {
  files.forEach(file => {
    if (reg.test(file)) {
      arr1.push(file)
    }
  })
  console.log('任务1',arr1)
})
// 任务二
fs.readdir(path, function (err, files) {
  files.forEach(file => {
    if (reg.test(file)) {
      arr2.push(file)
    }
  })
  console.log('任务2',arr2)
})