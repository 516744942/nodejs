const https = require('https');
const fs = require('fs');
const aaa = fs.readFileSync('www.xixihaha.com/www.xixihaha.com.key')
const bbb = fs.readFileSync('www.xixihaha.com/fullchain.cer')

const options = {
  key: aaa,
  cert: bbb
}
https.createServer(options, (req, res) => {
  res.writeHead(200)
  res.end("Hi from HTTPS")
}).listen(8000)