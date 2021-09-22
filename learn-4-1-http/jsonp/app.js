const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
  console.log(req.url)
  let urlObj = url.parse(req.url, true)
  console.log(urlObj.query.cb)
  switch (urlObj.pathname) {
    case '/api/user':
      res.end(`${urlObj.query.cb}({"name": "gp145"})`)
      break
    default:
      res.end('404.')
      break
  }
})

app.listen(8080, () => {
  console.log('localhost:8080')
})