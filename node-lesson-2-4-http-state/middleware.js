/**
 * 常用中间件
 * 特色的常见中间件
 * 会话  用来保持客户端和服务的的状态
 * Etag Etag是web缓存优化的常见中间件
 * 验证码 验证码是采用OTP封装的中间件
 * 限制访问率 对抗暴力破解的有效手段
 */
/**
 * 会话
 * HTTP本身是吴状态协议
 * 但有时我们需要记录用户的状态
 * 比如购物车状态
 * 用户登录状态等
 * 了解会话
 * 会话是一种记录客户状态的机制 
 * 和Cookie类似,不同的是Cookie保存在客户端浏览器中,会话保存在服务器上
 * 
 */
/**
 * koa与会话相关的模块
 * koa-session
 * koa-generic-sessio
 * n Session Store的抽象层 目标让会话能够存储在Redis或MongoDB等自定义持久化存储中
 * 它内置了MemoryStore,即内存储蓄      
 */
const koa = require('koa')
const session = require('koa-generic-session')
const RedisStore = require('koa-redis')

const app = new Koa()
app.keys = ['keys', 'keykeys']
//  加入全局中间件
app.use(session({
  store: new RedisStore(),
  ttl: 30 * 60 * 1000 //半小时
}))
// 在路由中可以直接通过ctx.session队后面的中间件进行操作
app.use(ctx => {
  switch (ctx.path) {
    case '/get':
      ctx.session.user = { name: 'i5ting' }
      ctx.body = ctx.session.user
      break
    case '/remove':
      ctx.session = null
      ctx.body = "removed"
  }
})
app.listen(3000)
/**
 * 依赖redis 因此需要先启动Redis服务器
 * 通过ctx.session 进行会话信息处理
 * TTL是 Session Store的超时时间
 */


/**
 * Etag
 * ETag 是前端缓存优化的重要部分
 * ETag 在服务器端生成后,客户端将通过If-Match或if-None-Match条件判断请求来验证资源是否被修改
 */
/**
 * 在koa-conditional-get
 * koa-etag插件来提供
 */
var conditional = require('koa-conditional-get')
var etag = require('koa-etag')
app.use(conditional())
app.use(etag())

/**
 * 这里的etag就是在Koa中用于生产Etag的中间件
 * ETag缓存是通过conditional-get拦截菜生效的
 * koa-conditional-get 一定要放在koa前面
 */
/**
 * Etag的核心实现就是koa-etag模块
 * 首先要获取entity
 * 一般是ctx.body的内容 
 * 然后etag模块回计算出Etag的值
 * 并将这个值赋值给ctx.response.etag
 */
var cacluate = require('etag')
ctx.response.etag = calculate(entity, option)

/**
 * 验证码
 * 银行方保留一个密钥
 * 同是使动态口令生成器中的key与银行方保持一致
 * 通过OPT等协议算法生成6位数字
 * 这个过程很难被逆转和破解,因为只要将Key设置得足够复杂
 * 验证码就几乎不可能被破解
 * 同是基于时间策略,更难破解
 */
/**
 * OTP的全程为 One-Time password· 动态密码
 * 根据专门的算法 每隔60秒生成一个与时间相关的
 * OTP分两种:HOTP和TOTP
 * HPTP 基于加法计数器和静态对称密钥的算法
 * TOTP是基于时间的 一次性密码算法
 * 
 */
/**
 * 基于HMAC一次性密码算法的扩展算法
 * 
 */
/**
 * 限制访问频率
 * 限制用户发短信的时间间隔
 * 由于短信发送是按条收费的
 * 发多了成本也高,所以回各种限制
 * 比如常见的60s之后可以再发送一次
 * 每次验证的有效期10min
 */

/**
 * 接着说 expire 命令
 * 他的原理 
 * 首先检测换成
 * 
 */
