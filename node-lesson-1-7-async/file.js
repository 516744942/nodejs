const fs = require('fs')
const path = './a'
// 异步写法
fs.readdir(path, function (err, files) {
  console.log('哈哈', files) //[ 'a.js', 'b.js' ]
})

// 同步写法  高并发下慎用,不然可能会遇到性能瓶颈
let a = fs.readdirSync(path)
console.log('a', a)


// 找出koa开头的文件
let arr = []
let reg = /^koa/i
a.forEach(file => {
  console.log('file', typeof file)
  if (reg.test(file)) {
    arr.push(file)
  }
})
console.log('arr', arr)

function filter(files) {
  let arr = []
  files.forEach(file => {
    if (reg.test(file)) {
      arr.push(file)
    }
  })
  return arr
}

fs.readdir(path, function (err, files) {
  let a = filter(files);
  console.log('结果', a)
})
let b = filter(fs.readdirSync(path))
console.log('result', b)


/**
 * 极端情况
 * 如果文件上千上万个,这种同步代码就会阻塞后面方法阻塞
 * 建议采用异步方法
 * 
 */
let extreme = fs.readdirSync('.');
console.log('极端', extreme)

fs.readdir(path, function (err, files1) {
  let a = filter(files1);
  console.log('极端异步', a)
})
fs.readdir(path, function (err, files2) {
  let a = filter(files2);
  console.log('极端异步', a)
})
/**
 * 以上执行两个fs.readdir方法
 * 这样能更好的地利用系统资源完成更多的任务
 * 通过EventLoop执行I/O任务,只要系统资源加油剩余,就会不断执行，这就是Node.js好处
 * 回调有些麻烦,因此收到很多人诟病,
 * 但异步依然是最佳表现
 * 
 */
module.exports = {
  filter
}