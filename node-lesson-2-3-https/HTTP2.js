/**
 * HTTP2 目标
 * 异步连接多路复用
 * 头部压缩
 * 请求/响应管线化
 */
/**
 * 新特性
 * 多路复用
 * 每个源 一个连接
 * 服务器推送
 * 请求优先级
 * 头部压缩
 */
const http2 = require('http2')
const fs = require('fs');

const server = http2.createServer({
  key: fs.readFileSync('app.js'),
  key2: fs.readFileSync('HttpTunnel.js')
})

server.on('error', (err) => {
  console.log('err',err)
})
/**
 * protocol http:这代表网页使用的HTTP  koa对应ctx.protocol http:
 * slashes  //  斜杠语法   //
 * auto     与授权相关
 * host hostname 和port            127.0.0.1:80
 * prot 服务器对应的端口号 默认为80    80
 * hostname  服务器对于域名与IP地址  ctx.hostname  127.0.0.1
 * hash 字符串 锚部分 # 对应DOM中的location.hash   #abc= 1
 * search 搜索部分 ?后面 &分隔   ?a=1&a=2     ctx.search
 * query  查询字符串         a=1&a=2          ctx.query
 * pathname   域名最后/开始 ?为止   /site/ownway
 * path    pathname和search  
 * href  完整的URL  ctx.href
 */
/**
 * HTTP头部
 * HTTP采用了请求/响应模型
 * 网络传输内容 message-header和message-body
 * 首先传输的是HTTP头部消息
 * 分为4个部分  general header request header  response header entity header(实体)
 * 
 */
/**
 * 浏览器缓存机制
 * 使用cache-control判断是否有缓存
 * 如果有缓存且缓存咩有过期
 * 就直接读取缓存并呈现
 * 如果缓存过期,就检测Etag值
 * 响应头中的Etag表示资源的版本
 * 浏览器在发送请求时会自动附带名为if-None-Match 的请求头字段 来询问Web服务器该资源版本是否仍然可用
 * 如果服务器发现该资源的版本仍然是最新的,就返回304状态码指示器继续使用缓存呈现
 * 否则返回200并向服务器发起请求
 * 
 */