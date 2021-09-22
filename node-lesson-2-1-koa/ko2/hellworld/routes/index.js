const path = require('path')
const multer = require('koa-multer')
const upload = multer({ dest: 'uploads/' })
const router = require('koa-router')()
//  视图渲染
router.get('/', async (ctx, next) => {
  ctx.state = {
    session: "你好呀 ctx.state",
    title: 'app'
  }
  // ctx.render方法进行视图层渲染
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
// 字符串
/**
 * 赋予ctx.body不同类型的值会返回不同的结果
 * 赋予JSON对象时,ctx会返回JSON接口,为ctx.body赋值字符串时
 * 返回HTML文本
 * ctx.render是因为添加了koa-views中间间而绑定到ctx上的,原本的ctx上是没有渲染函数的
 * 也就是说,我们可以通过中间件在ctx上绑定我们要使用的功能
 */
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
router.post('/string/:id', async (ctx, next) => {
  console.log('ctx.params', ctx.params)
  console.log('ctx.query', ctx.query)
  console.log('ctx.body', ctx.request.body)
  ctx.body = 'koa2 string'
})
/**
 * 具名参数
 */
router.get('/a/:id', async (ctx, next) => {
  console.log('ctx.query', ctx.query)
  console.log('ctx.body', ctx.request.body)
  ctx.body = `id${ctx.params.id}`
})
router.get('/string2', async (ctx, next) => {
  ctx.body = '{"a":"b"}'
})
router.get('/api/', async (ctx, next) => {
  ctx.body = '{"a":"b"}'
})
// json API
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// router.get('/public/*', async (ctx, next) => {
//   console.log(123,'public')
//   // ctx.url = path.basename(ctx.url)
//   console.log(resolve('./public'))
//   console.log('ctx.url',ctx.url)
//   await next()
//   console.log(ctx)
// }, staticServer(resolve('./public')))


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


module.exports = router
