const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

app.use(async ctx => {
  ctx.status = 404;
  ctx.type = "html"
  ctx.cookies.set('name1', 'koajs',{maxAge:10000,httpOnly:false} )
  ctx.cookies.set('name2', 'koajs', )
  ctx.cookies.set('name3', 'koajs', )
  ctx.cookies.set('name4', 'koajs', )
  // await fs.readFile(`${__dirname}/data.txt`, { encoding: 'utf8' }, (err, data) => {
  //   body = data
  // })
  ctx.body = '<h1>洗哈哈</h1>'
})
app.listen(3000)
