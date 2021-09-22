/**
 * API 开发
 * 多端API的  必须复用
 */

/**
 * API的简单写法
 * 一般情况下,我们需要对API响应式结果进行封装
 * 将响应式的状态和具体的响应式数据进行分离
 */
// {
//   "status": {
//     "code": 10000,
//       "message": 'Success',
//   },
//   "response": {
//     ...results...
//   }
// }

/**
 * npm install --save koa.res.api
 * koa.res.api
 * koa.res.api是一个Koa中间件,要将它挂在app对象上,方法如下
 * 
 */
var Koa = require('koa');
var app = new Koa();
var res_api = require('koa.res.api');
const { Interface } = require('readline');
app.use(res_api())

ctx.api(404, {
  code: 1,
  msg:
})

ctx.api(data, {
  code: 1,
  msg: 'delete failed'
})
ctx.api(data)

ctx.api(data, {
  code: 1,
  msg: 'delete failed'
})
ctx.api_error(err)

/**
 * 响应处理
 * 动态语言经常会跑出Uncaught TypeError类的异常,
 * 外加各式各样的数据结构也会增加 响应处理的难度
 * 
 */
/**
 * loadsh
 * 
 * TypeScript
 * 
 */
Interface User {
  name: string,
    age: number
}
function printUserInfo(user: User) {

}
// GET  查看
//  POST 创建
// PUT  更新
//  DELETE 删除
// PATCH   更新
//  HEAD   
// OPTIONIS  跨域 

/**
 * HTTP 头部信息(可自定义)
 * HTTP 响应状态代码(可自定义)
 * 一套标准的内容协议
 * 一套标准的缓存机制
 * 一套标准的缓存机制
 * 一包标准的客户端身份认证机制
 */

/**
 * API 访问鉴权
 *
 */
/**
 *  如下规则
 * 1. 有调用者身份
 * 2. 请求具有唯一性
 * 3. 请求的参数不能被
 * 4. 请求有效时间 即API对应的令牌(token)的有效期要一些
 */
/**
 * Oauth 中包含两个方法 : 加密生成令牌 
 * 在加密的时候 要把过期时间加进去 如果对安全性要求特别高 可以把过期时间设置得短一些
 * 如果想增加安全性 也可以叠加鉴权
 */


/**
 * jwt
 * 1。
 */
const jwt = require('jsonwebtoken')
const secret = '17koa.com'
var token = jwt.sign({
  data: {
    user_id: 100000,
    user_name: 'i5ting',
    user_email: 'i5ting@126.com',
  }
}, secret, { expiresIn: '1h' })

try {
  var decoded = jwt.verify(token, secret)
  conso.log(decoded)
} catch (e) {
    conso.log(e)
} finally {

}

/**
 * 常用中间件
 * 特色的常见中间件
 * 会话  用来保持客户端和服务的的状态
 * Etag Etag是web缓存优化的常见中间件
 * 验证码 验证码是采用OTP封装的中间件
 * 限制访问率 对抗暴力破解的有效手段
 */
