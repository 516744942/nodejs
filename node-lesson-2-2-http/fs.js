/**
 * 文件操作
 * 大文件读写是非常麻烦的
 * 对于这种方式方式Stream作为读写方法是最好的,
 * 这也是Http中广泛采用流式方法处理文件的原因
 * 
 */


const fs = require("fs");
const soure = fs.readFileSync('http.js', { encoding: 'utf8' });
fs.writeFileSync('enter.js', soure)
/**
 * 创建可读流 createReadStream
 * 创建写入流 createWriteStream
 * pipe 用来传递上一个流的输出并将其作为下一个流的输入的链式方法
 */
fs.createReadStream('http.js').pipe(fs.createWriteStream('enterStream.js'))
/**
 * 在http请求过程中,也可以将 http请求和fs读写的流结合使用,
 * 
 */
const http = require('http');
const { request } = require("https");
const app = http.createServer((req, res) => {
  fs.readFile(`${__dirname}/data.txt`, { encoding: 'utf8' }, (err, data) => {
    console.log('data', data)
    // res.writeHead('200',{'Content-type':'text/html'})
    let status = 200
    res.writeHead(status, { 'Content-type': 'text/plain' });
    res.write('<h1>', 'utf8')
    res.write('你好', 'utf8')
    res.write('</h1>', 'utf-8')
    res.end(data)
  })
})
app.listen(3000, function () {
  const PORT = app.address().port
  console.log(`${PORT}`)
})
// 3 转换模块
// Gulp(大口)是Node.js世界里基于Stream实现的最著名的流式高效构建工具
// 无论在用法还是执行效率都做到了极致

// const through = request('through');
// module.exports = opts => {
//   return thorough.obj((file, enc, cb) => {
//     if(opts.showFiles){
//       const full =
//     }
//   })
// }
