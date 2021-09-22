const { request, response } = require('express')
var http = require('http')
var https = require('https')

const server = http.createServer((request, response) => {
  var url = request.url.substr(1)
  var data = ''
  response.writeHeader(200, {
    'content-type': 'application/json;charset=utf-8',
    'Access-Control-allow-Origin': '*'
  })
  https.get(`https://m.lagou.com/listmore.json${url}`, (res) => {
    res.on('data', chunk => {
      data += chunk
    })
    res.on('end', () => {
      response.end(JSON.stringify({
        ret: true,
        data
      }))
    })
  })
  
})
server.listen(8080)