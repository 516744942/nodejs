const Koa = require('koa');
const app = new Koa()

// 日志中间件 node>7.6 支持 async和ctx 
// 参数变化 之前的es6只能用this作为上下文
// 而在async函数中可以使用显示的ctx作为上下文
app.use(async (ctx, next) => {
  const start = new Date()
  console.log('logger middleware before await')
  await next()
  console.log('logger middleware after await')
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url}-${ms}ms`)
})

app.use(async ctx => {
  console.log('respon middleware response')
  ctx.body = 'hello Koa2'
})
app.listen(3001)

/**
 * logger middleware before await
 * respon middleware response
 * logger middleware after await
 * GET /-1ms
 * logger middleware before await
 * respon middleware response
 * logger middleware after await
 * GET /favicon.ico-1ms
 * 先经过logger中间件
 * 然后跳转到 response... 
 * 
 */

/**
 *  新增一个crx参数的主要原因是,因为使用了async箭头函数
 *  app.uer(async,(ctx,next)=>{
 *    
 *  })
 */