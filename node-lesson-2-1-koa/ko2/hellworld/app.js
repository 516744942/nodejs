const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const index2 = require('./routes2/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
// 中间件名称和加载顺序
// 解析post类HTTP动词的body内容
// 加上bodyparser后就可以处理所有请求了
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// 跟好的支持json
app.use(json())
// 开发阶段日志
app.use(logger())
// 提供静态托管服务
// 
app.use(require('koa-static')(__dirname + '/public'))

// 试图渲染,支持模版引擎
// 通过app.use()绑定到app上,实际上是给app对象增加ctx.render方法的绑定
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger 自定义logger中间件 无名称,记录日志
/**
 * Koa中将req和res都绑定ctx上下文,这样语义上更清晰,扩展起来更加容易
 * Express中间件只能捕获单向的请求流,Express中间件只能捕获单项的请求流
 * Koa中间件可以双向拦截,在一个中间件里同事对req和res进行拦截能够让代码更简洁,高效
 * 从语义上说,Koa中间件更明确一点,不过这不是绝对优势,毕竟Express也可以用async语法
 */
app.use(async (ctx, next) => {
  
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes 第二个参数 index.route()是router对象上挂载的所有中间件,每个中间件其实都是自路由,假设我们要在同一个router上挂载两个子路由
app.use(index.routes(), index.allowedMethods())
app.use(index2.routes(),index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
