// 引入http 模块
const http = require('http');
//  通过http.createServer方法创建一个Server实例
//  参数是requestListener函数
//  一般是function(req,res){...}
// req 表示请求  res表示相应
const port = 3000

http.createServer(async (req, res) => {
  console.log(`${req.method},${req.url}`)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('<h1>', 'utf8')
  res.write('123', 'utf-8')
  res.write('</h1>', 'utf-8')
  res.end('Hello Node.js\n')
}).listen(port)

// 响应 res
// res是指服务器返回给浏览器的响应
// 即服务器响应,作用是告诉浏览器如何完成渲染工作
// res.writeHead(200,{'Content-Type:'text/plain'})

// 分5中类型

// 1** 服务器收到请求,请求者继续执行操作
// 2** 成功,操作成功接收并处理
// 3** 重定向,需要进一步操作已完成请求
// 4** 客户端错误,
// 5** 服务器错误,

// content-type

/**
 * .txt text/plain  文本
 * .html text/html  网页
 * .json application/json  网页
 * .gif image/gif  图片
 */

//  设置向浏览器中写入内容作为相应
// res.end('Hello Node.js\n')
// 两个写入数据的方法
// res.write('chunk‘,encoding)
// res.end(data,[,callback]) []代表可选项

// 声明app 为http:createServer返回值,这是比较常见的做法
// 设置状态码为200
// 设置Content-Type 为text/html,这样浏览器会按照HTML形式进行渲染
// 使用res.write和res.end向浏览器写入HTML代码

// 使用app.listen()启动Server时没有指定的端口号
// 而需要Server来随机分配端口号,具体端口号 可以用过app.address().port来获取,示例如下

/**
 * const server = http.createServer(app()).then(3000, () => {
  const host = server.address().address
  const prot = server.address.port();
  console.log('umi mock serve at htto://')
})
 */

//  核心要点
//  http模块是Node.js中应用最广且最代表性的模块
//  以便大家能够更好地理解Node.js高效完成 I/O密集型HTPP应用的原理

// 1. HTTP是Web应用开发的基础,我们要对协议及其应用场景有深入理解
// 2. EvenEmitter主要负责事件监听和处理异步处理结合事件驱动可以活得更好的性能和易用性
// 3. 将请求响应过程抽象成一个流并在内存中传递,便于进行大文件处理,能够提高扩展性

// 1 Node.js中的I/O操作是异步的,处理起来非常麻烦,而流式I/O处理更简单高效。
// 2 基于Buffer数据结构进行操作时可以节省内存,适合处理大文件
// 3 包含事件机制(继承自EventEmiter),具有更高的效率和更好的扩展性
// 可以通过pipe方法轻松地连接流和流之间的处理过程,易于组装

const stream = require('stream');
// 有5种流操作类型
// Readable:可读操作类型,可以产出数据,这些数据可以被传送到其他流中,只需要调用pipe
// writeable:可写操作类型,只能流进不能流出
// Duplex(双层): 可读写操作类型
// Transform(改变):转换类型,可以写入数据,然后读出结果。
// classic :经典接口

/**
 * 原理
 * stream的精髓是将上一个输出作为下一个输入
 * 这和Linux里管道的功能是一样的,比如查杀所有Node.js的命令如下
 *
 */
/**
 * ps -ef 查看活动进程
 * grep node  过滤并获得包含node在内的所有进程
 * awk '{print $2}'  通过awk获取包含node在内的所有进程号
 * xargs kill -9  通过xargs反转进程号 ,并作为kill-9参数
 * 
 */
/**
 * stream通过管道进行管理
 * 要求输入和输出的内容必须都是流
 * 否则需要通过thorough2这样的模板进行转换
 * 
 * 
 */
/**
 * http连接中的request对象是可读流(readable),而response对象是可读可写流(Stream.Duplx)
 * 
 */
const client = http.request({
  host: "httpbin.org",
  path: "/ip"
},
  (res) => {
    res.setEncoding('utf8')
    var str = ''
    res.on('data', function (chunk) {
      str += chunk
    })
    res.on('end', function () {
      console.log(str)
    })
  }

  
)
client.on('error',e=>{
  console.log(`${e.message}`)
})
client.end()
/**
 * end 开始发起请求 整个请求是异步的,所以要不断地拼接获得chunk,
 * 这也是HTTP中广泛采用流式方法处理文件的原因
 * 
 */
