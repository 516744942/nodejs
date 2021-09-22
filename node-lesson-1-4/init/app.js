const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

/**
 * uncaughExcepeion捕获异常可以解决问题
 * 
 */
app.use(ctx => {
  if (ctx.path == '/good') {
    return ctx.body = 'good'
  }
  fs.readFile('somefile.txt', function (err, data) {
    /**
     * 3错误处理
     * Node里约定,同步代码才能捕获异常
     * 异步代码不能直接使用 try/catch 与你采用的一步流程控制方式有关 如果使用Promise,就使用Promise的异常处理方法
     * 使用try/catch成本 比较高,除非必要,一般不建议使用
     */
    try {
      if (err) throw err;
      console.log(data);
      ctx.body = 'Hello Koa'
    } catch (e) {
      // 这里捕获不到readCallback函数抛出的异常
      console.log('e', e)
    } finally {
      console.log('离开 try/catch')
    }

  })
})
/**
 * 2 错误处理
 * 异常捕获
 * 异常是一种安全的分支处理技术
 * 一旦应用程序初心啊状况且不及时处理
 * 程序就会中断执行
 */
process.on('uncaughtException', function (err) {
  console.log('错误', err)
})

app.listen(3001)