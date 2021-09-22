/**
 * node-fetch
 * Fetch API 是XMLHttpRequest 的替代技术
 * 是一个简单、标组的javaScript的AJAX API
 * 定义在BOM中window对象中,该方法返回一个Promise对象
 * 我们可以对请求的返回结果进行检索
 * Chrome和FireFox浏览器已经可以
 * 可以使用fetch polyfill  
 */

const { json } = require("stream/consumers")

/**
 * npm i -s node-fetch
 * 
 */
const fetch = request('node-fetch')

fetch('http://127.0.0.1:3000/user/port', {
  method: 'POST',
  body: JSON.stringify({
    username: 'yourUsername',
    password: 'yourPassword',
  }),
  headers: {
    'Content-Type': 'application/json'
  }
}).then((res) => {
  return res.json()
}).then(json => {
  console.log(json)
})
