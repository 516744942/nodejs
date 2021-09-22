const Koa = require('koa');
const app = new Koa()

const sleep = ms => new Promise(r => setTimeout(r, ms))
app.use(require('koa-bigpipe'))

app.use(ctx => {
  // ctx.body ='Hello Koa'
  ctx.write('loading... <br>')
  return sleep(2000).then(function () {
    ctx.write('timer:200ms<bar>')
    return sleep(5000)
  }).then(function () {
    ctx.write('timer:500ms<bar>')
  }).then(function () {
      ctx.end()
    })
})

app.listen(3010)