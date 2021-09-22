var connect = require('connect')
var http = require('http');
var app = connect()
//  第一个相应所有请求
app.use(function fooMiddleware(req, res, next) {
  console.log(2222)
  res.end('Hellofrom')
})
//  这样第二个use中间件就不会收到任何请求了
app.use('/2', function fooMiddleware(req, res, next) {
  console.log(1111)
  res.end('Hellofrom1111')
})

/**
 * 相当于之前写的 if else
 */

http.createServer(app).listen(3011)