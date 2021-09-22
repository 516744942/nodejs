var connect = require('connect');
var http = require('http');
var app = connect();
// 对响应进行 gzip压缩
var compression = require('compression')
app.use(compression())
// 在浏览器缓存里 取会话状态
var cookieSession = require('cookie-session')

app.use(cookieSession({
  keys: ["secret1", "secret2"]
}))
// 解析urlencoded的请求题
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extend: false }))


app.use('/1',function (req, res) {
  res.end('Hello from Connec123')
})

// 响应所有请求 
app.use(function (req, res) {
  res.end('Hello from Connect!n')
})
http.createServer(app).listen(3003)