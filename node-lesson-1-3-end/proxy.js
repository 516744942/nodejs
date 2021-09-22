const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  console.log('次数',req.url)
  if (req.url === "/remote") {
    res.writeHead(200, { "Content-Type": 'text.plain' })
    return res.end('Hello Remote Page\n');
  }
   else {
    proxy(req, res)
  }
})

function proxy(req, res) {
  let options = {
    host: req.host,
    port: 3000,
    headers: req.headers,
    path: '/remote',
    agent: false,
    method: "GET",
  }
  /**
   * http.request()即一个新的res
   */
  let httpProxy = http.request(options, (response) => {
    /**
     * 
     * response.pipe(res)  将res放到response流离，完成代理
     * 
     */
    response.pipe(res)

  })
  /**
   * httpProxy里面是一个完整的HTTP请求,于是就有了httpPRoxy的response
   * 
   */
  // 返回值是<http.ClientRequest>
  /**
   *  req.pipe(httpProxy)通过pipe方法,使得req有了新的代理请求,即HTTPProxy
   */
  req.pipe(httpProxy)
}
app.listen(3000,()=>{
  const PORT = app.address().port
  console.log(`run 127.0.0.1${PORT}`)
})