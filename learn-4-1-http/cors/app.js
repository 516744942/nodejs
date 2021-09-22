const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true)
  var allowedOrigins = ['http://127.0.0.1:8081','http://localhost:8020','http://127.0.0.1:9000','http://localhost:9000'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin',origin);
  }
  switch (urlObj.pathname) {
    case '/api/user':
      res.writeHead(200,{ 
        'content-type':'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8081' 
      })
      res.write('{ "name": "gp145" }')
      break
    default:
      res.write('404.')
      break
  }
  res.end()
})

app.listen(8080, () => {
  console.log('localhost:8080')
})