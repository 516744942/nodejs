/**
 * 3 http.Server事件
 * http.Server类继承自netServer类,除了支持que事件和res事件,还支持Server类事件
 * 如果想记录和拦截请求信息,可以采用如下方式
 * 
 *
 */
const http = require('http');
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello Node.js\n')
})
app.on('request', (req, res) => {
  console.log(req)
  console.log(res)//事件处理
})
app.listen(3000, () => {
  const PORT = app.address().port
  console.log(`${PORT}`)
})
// curl -d "a=1" http://127.0.0.1:3002/each


