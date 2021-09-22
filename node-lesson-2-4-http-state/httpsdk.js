const querystring = require('querystring')
const http = require('http')
const data = querystring.stringify({
  username: "xixihaha",
  password: "yourPassword"
})
const options = {
  host: '127.0.0.1',
  path: '/users/post',
  port: '3000',
  method: 'port',
  headers: {
    "Content-Type": 'application/x-www-form-urlencoded',
    "Content-Length": Buffer.byteLength(data)
  }
}
const callback = function (response) {
  let str = ''
  response.on('data', function (chunk) {
    str += chunk
  })
  response.on('end', function () {
    console.log(str)
  })
}
const req = http.request(options, callback)
req.write(data)
req.end()
