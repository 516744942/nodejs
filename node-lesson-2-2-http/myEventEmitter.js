/**
 *  EventEmitter
 * 在Node.js会使用时间驱动模型
 * 事件是核心机制
 * EventEmitter是Node.js里典型的基于观察者模式的实现类
 * 它是对事件触发与事件监听器功能的封装
 * 订阅和发布方法是可选的,所以用法更加灵活
 * 像jQuery、Vue等前端框架也都有类似的事件机制
 * Event是事件列表,所有的任务最重都在EventLoop里触发执行
 */
/**
 * EventEmitter Event-loop  Event Handler
 * 所有的Stream对象都是EventEmitter的实例,而响应和请求属于Stream对象
 * 所以他们也是EventEmitter的实例,并且继承了Stream和EventEmitter中的事件
 * 常见的事件有一下几类
 * data 当有数据可读时触发
 * end  没有更多的数据可读时触发
 * error 接受和写入过程中 发生错误时触发
 * finish 所有数据已被写入时候触发
 * 
 */
/**
 * 1.请求事件
 * 请求事件有一个非常典型的列子
 * 即保存请求向服务器传递过去的表单数据
 * 这时我们可以使用req.on('data',cb)
 */
const http = require('http');
const app = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/echo') {
    var body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    }).on('end', () => {
      body = Buffer.concat(body).toString()
      res.end(body)
    })
  } else {
    res.statusCode = 404;
    res.end()
  }
})
app.listen(3000, () => {
  const PORT = app.address().port
  console.log(`${PORT}`)
})
// curl -d "a=1" http://127.0.0.1:3002/each

/**
 * 2. 响应时间
 * http.ServerResponse
 * 
 */
