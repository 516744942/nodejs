"use strict"

const http = require('http');
/**
 * 引用了Node.js SDK内置的名为http的模块
 * 通过http.createServer创建了 一个HTTP服务
 * 通过listen 方法指定端口和IP地址,启动服务
 * res是HTTP里的respon(相应)的别名,通过res控制对浏览器的操作,设置返回状态码 200
 * 设置HTTP头字段里面的Content-Type 为 text/plain 类型
 * 最后向浏览器返回 Hello Node.js
 *
 */

http.createServer((req, res) => {
  let status = 200
  res.writeHead(status, { 'Content-type': 'text/plain' });
  res.end('Hello Node.js\n')
}).listen(3001, "127.0.0.1")


