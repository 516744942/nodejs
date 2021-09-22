// 4.Http代理
//  前面讲过,请求和响应都是继承自Stream,可以直接通过pipe方法进行组装
const http = require('http')
const fs = require('fs')
// const app = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/echo") {
//     req.pipe(res)
//   } else {
//     res.statusCode = 404
//     res.end()
//   }
// })
// 只是演示简单的pipe的用法,下面看一个简单实用的代理
let times = 0
const app = http.createServer((req, res) => {
  times++
  if ('/remote' === req.url) {
    res.write('200', { 'Content-type': 'text/plain' })
    return res.end("Hello Remote Page\n")
  } else {
    proxy(req, res)
  }
})
function proxy(req, res) {
  let option = {
    host: req.host,
    port: 3000,
    headers: req.headers,
    path: '/remote',
    agent: false,
    method: "GET"
  }
  let httpProxy = http.request(option, response => {
    // response.pipe(res)
    response.pipe(res)
  })
  // httpProxy是一个新的饿请求
  req.pipe(httpProxy)
}
app.listen(3000, function () {
  const PORT = app.address().port
  console.log('Server running at http://127.0.0.1:${PORT}')
})
/**
 *  http.request返回值是 http.ClientRequets
 */