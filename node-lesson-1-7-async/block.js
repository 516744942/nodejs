/**
 * 模拟阻塞
 * 5秒之后才执行filter函数
 * 同步虽好,但是要慎用
 * 异步才是常态
 * 最好以异步来思考问题
 * 如果是一些工具类非高并发的软件,同步阻塞方式也是推荐的,会使开发效率更高
 * 
 */
const fs = require('fs');
const { filter } = require('./file')

function sleep(milliSeconds) {
  let startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
}
const myFiles = fs.readdirSync('.')
console.log('myFiles',myFiles)
sleep(5000)
console.log(filter(myFiles))

