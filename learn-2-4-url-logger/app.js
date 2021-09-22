const url = require('url');
var log4js = require('log4js');

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ["cheese"], level: 'error' } }
})

const logger = log4js.getLogger("cheese");
logger.level = "debug";

const urlString = 'https://baidu.com:443/path/index.html?id="2#tag=3'


// logger.debug(url.parse(urlString)); //字符串编程对象                      

const urlObject = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'baidu.com:443',
  port: '443',
  hostname: 'baidu.com',
  hash: '#tag=3',
  search: '?id=%222',
  query: 'id=%222',
  pathname: '/path/index.html',
  path: '/path/index.html?id=%222',
  href: 'https://baidu.com:443/path/index.html?id=%222#tag=3'
}

// logger.debug(url.format(urlObject)); //对象变成字符串

// 路径分析
var a = url.resolve('/one/two/three', 'four')  ///one/two/four
var b = url.resolve('http://example.com/', '/one') //http://example.com/one
var c = url.resolve('http://example.com/three/rwer', '/two') //http://example.com/two

console.log(a + "," + b + "," + c)


const urlParsms =new URLSearchParams(url.parse(urlString)); //对象变成字符串
// logger.debug(urlParsms)
logger.debug(urlParsms.get('id'))


const querystring = require('querystring');
const query1 = 'id=2&name=hefeng'
var parsed = querystring.parse(query1)
console.log(parsed)
var qo = {
  x: 3,
  y: 4
}
var parsed = querystring.stringify(qo)
console.log(parsed)

var str = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com'
var unescaped = querystring.unescape(str)
console.log(unescaped)