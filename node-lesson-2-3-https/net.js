/**
 * net 专门处理socket连接的
 */

const net = require('net');
const app = net.createServer((connected) => {
  console.log("client", connected)
  connected.on('data', data => {
    console.log(data.toString())
  })
  connected.on('end', () => {
    console.log('client disconnected')
  })
})
app.listen(3000)
