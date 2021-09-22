const http = require("http");
const https = require("https");
const querystring = require("querystring");

const server = http.createServer((request, response) => {
  const url = request.url
  let data = ''
  request.on('data', chunk => {
    data += chunk
  })
  request.on('end', chunk => {
    response.writeHead(200, {
      // 'content-type':'text/html;;charset=utf-8'
      'content-type': 'application/json;charset=utf-8'
    })
    console.log('data',querystring.parse(data))
    response.write(JSON.stringify(querystring.parse(data)))
    response.end()
  })


  // response.writeHead(200, {
  //   // 'content-type':'text/html;;charset=utf-8'
  //   'content-type': 'application/json;charset=utf-8'
  // })
  // response.write('{"a":"你好"}')
  // response.end()
})

server.listen(8080, () => {
  console.log('localhost:8080')
})

/**
 * node  --inspect server.js调试
 * node  --inspect --inspect-brk  server.js  浏览器调试js
 */

/**
 * node 进程管理工作
 */