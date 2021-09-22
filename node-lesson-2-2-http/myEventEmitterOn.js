/**
 * 2. 响应时间
 * http.ServerResponse
 *
 */
const http = require('http');
const app = http.createServer((req, res) => {
  req.on('error', (err) => {
    res.statusCode = 400
    res.end()
  })
  res.on('error', (err) => {
    console.log(err)
  })
  if (req.method === 'POST' && req.url === '/echo') {
    req.pipe(res)
  } else {
    res.statusCode = 404
    res.end()
  }
})
app.listen(3000, () => {
  const PORT = app.address().port
  console.log(`${PORT}`)
})
// curl -d "a=1" http://127.0.0.1:3002/each


