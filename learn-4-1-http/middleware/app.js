const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware')


http.createServer((req, res) => {
  let url = req.url

  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })

  if (/^\/api/.test(url)) {
    console.log('proxy', createProxyMiddleware)
    let apiProxy = createProxyMiddleware('/api', {
      target:'https://passport.m.youzan.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/code/country-code.json'
      }
    })
    console.log('apiProxy',apiProxy)
    // http-proy-middleware 在Node.js中使用的方法   正向代理
    apiProxy(req, res)
  } else {
    switch (url) {
      case '/index.html':
        res.end('index.html')
        break
      case '/search.html':
        res.end('search.html')
        break
      default:
        res.end('[404]page not found.')
    }
  }
}).listen(8080)