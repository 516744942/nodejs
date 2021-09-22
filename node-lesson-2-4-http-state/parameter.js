/**
 * params /user/:id  req.parpms  ctx.params  依赖koa-router
 * query   无        req.query     ctx.query
*   body   请求体     req.body      ctx.request.body
*/

const app = require('../node-lesson-2-1-koa/ko2/hellworld/app')
const router = require('../node-lesson-2-1-koa/ko2/hellworld/routes')

router.post('/string/:id', async (ctx, next) => {
  console.log('ctx.params', ctx.params)
  console.log('ctx.query', ctx.query)
  console.log('ctx.body', ctx.request.body)
  ctx.body = 'koa2 string'
})

/**
 * 解析请求体
 * 在HTTP请求中，POST、PUT、PATCH类的请求中包含请求体
 * 需要单独处理
 * 在Node.js原声的http模块中,请求体基本流的方式 接受和解析
 * 代码如下 
 * 
 * body-parser 是一个HTTP请求体解析中间件
 * 可用于解析JSON、ROW、文本、URL-encoded等格式的请求体
 * body-parse 对应的是 koa-body-parse
 * 
 */

/**
 * koa-bodyparser模块
 * ctx.request.body 
 * 
 */
const bodyparser = require('koa-bodyparser')()
app.use(bodyparser)
/**
 * ctx.request.body 的用法如下
 * 
 */
router.post('post', (ctx, next) => {
  ctx.body = ctx.request.body
})
/**
 * curl -d "a=1" http://127.0.0.1:3000/users/post
 * {
 *  a:1
 * }
 */
/**
 * 可以肯定的一点是  req.body 一定是POST类的请求,Koa依赖的中间件必须包含koa-bodyparser
 * 不然ctx.request.body是没有值的
 */


/**
 * 获取查询字符串
 * 前端中　 query是 queryString 是指查询字符串
 * 可以通过 KOa中,可以通过ctx.query来获取查询字符串对象,代码如下
 * 所有的方法都可以获取 查询字符串 并不局限于GET的请求  POST请求中也可以使用
 */
// GET /search?q=tobi +ferret
// ctx.query.q  "tobi ferret"

// POST /search?q=tobi +ferret
//  {a:1,b:2}
//  ctx.query.q
//  tobi +ferret
// 

/**
 * 原理
 * 在HTTP的请求头里
 * 有些HTTP动词会带有message-body，比如 post、patch、delete
 * 这些使用这些动词的请求,需要根据不同的Content-Type来返回body
 */
/**
 * 常用的处理方式
 * 表单提交类型     Content-Type              说明
 * JSON数据       application/json 
 *            application/json-patch+json      
 *             application/csp-report
 * form表单   application/x-www-form-urlencoded   常见的表单交互方式
 * 
 * text文本      text/plain                 不常用,特定场景会用
 */
/**
 * 常见POST
 * 相对于GET请求  POST有两个明显的好处
 * 传输的数据量比GET大
 * 具体可以传输多少数据看Web服务的配置
 * 安全性相对更高,毕竟不是明文传输
 */
/**
 * JSON 类型
 * 
 */

/**
 * 用过表单处理 
 * form-data
 * 其主要依赖两个模块
 * koa-bodyparser  解析body内容
 * koa-multer      文件上传
 */

app.use(bodyparser({
  enableTypes: ['json', 'from']
}))
/**
 * koa-multer是一个非常便于使用的文件上传模块
 * 使用koa-multer可以解析body中的流
 * 并将其保存成文件
 * 使用如下
 */
const multer = require('koa-multer')
const upload = multer({ dest: 'uploads/' })

router.post('/post/formdata', upload.any(), async (ctx, next) => {
  console.log(ctx, req, files)
  ctx.body = {
    status: {
      code: 0,
      msg: 'upload sucess',
    },
    data: {
      body: ctx.req.body,
      files: ctx.req.files
    }
  }
})

/**
 * 文件上传有两种方式
 * 调用CDN的SDK将文件直接从前端上传到CDN上
 * 采用常规上传方式
 * 先将文件上传到NOde.js服务器,再由Node.js服务器转存到CDN
 * 二者的差异在于是否需要通过服务器对文件进行定制
 * 如果没有这样的需求,直接上传就是很不错的方式
 */

/**
 * 普通表单
 * 普通表单对应的Content-Type是x.www-form-urlencoded
 * 默认只支持 form和json两种格式的解析
 * 当出现 Content-type:text/plain的时候 无法进行处理的
 * 这时候需要在koa-bodyparser中 开启text支持
 * 
 */
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

/**
 * ajax的技术实现包括4歌步骤
   * 创建AJAX对象
 * 发出HTTP对象请求
 * 接受服务传回的数据
 * 更新网页数据
 * 
 */
function testpost() {
  // 打开链接
  xhr.open('POST', '/users/post', true)
  xhr.onreadystatechange = function () {
    // this.readyState == 4 响应已完成    this.status == 200表示请求成功
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  }
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xhr.send('username=15%ting&password=0000')
}
//  curl -d "a=1&b=2" http://127.0.0.1:3000/users/post      普通表单处理
//  curl -F 'pic=@"img/post-common.png"' -F "a=1" -F 'b=2'  http://127.0.0.1:3000/users/post/formata  文件上传 
//  curl -d: "{"a":"1","b":"2","C":{"a":"1","b":"2"}}"      http://127.0.0.1:3000/users/post   表单处理