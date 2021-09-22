# 目录结果说明
1. app.js 为入口
2. bin/www 为启动入口
3. 支持静态服务器, 即public 目录
4. 支持routes路由目录
5. 支持view试图目录,pug为模版引擎

### package.json
1. package.json 是Node.js 模块定义的核心配置文件
2. 接触新项目的第一件事情就是
3. 接触新项目的第一件事情就是打开该文件,了解模块的各个属性

4个脚本
npm start 开发阶段使用的脚本,使用时代码发生变动,需要重启Node.js进程
npm run dev 也是开发阶段使用的脚步，使用时代码发生变动,nodemon会自动重启Node.js进程
rpm run prd 是产品环境使用的脚步,通过pm2来启动工程,默认按照CUP核数来启动对应的进程数,是目前最流行的方式
test 只会打印出为实现日志 

### 入口 bin/www
const server = http.createServer(app.callback())
server.listen(port);
server.on('error',onError)
server.on('listen',onError)

### app.js
1. 中间件
2. 路由
3. 静态服务
4. 试图

### 路由位于routes目录下
1. 路由本身也是中间件,位于独立目录routes下面,这样可以使路由的职责更清晰

### 静态服务器位于public目录下 koa-static 是一个用于文件托管的中间件
    是基于koa-send的模块的高级封装
    http://localhost:3001/stylesheets/style.css

1. 所有的静态资源都是GET请求
2. 该请求的Content-Type是text/css  这个是根据文件后缀名自动识别的,其他的文件依此类推
3. 具体的响应式内容在response标签里面
4. 其他的内容都是服务器自带的头部信息,比如,etag,cache-control


### 纯API项目,不需要public目录
### 纯前后端分离项目,后端不需要public目录，前端需要
### 需要public目录的项目,但会将public目录的内容分发到CDN上

### 注意,不要把static中间件放到Koa的全局对象件上(如果对于每个请求都要胖短一次是不是静态资源,会影响QPS),最好结合koa-router来处理,按需挂在


### 视图位于views目录下

1. 将HTML页面写到 public目录下就可以使用,这种情况通常只适用于静态网站,无法满足实际需求
2. 比如和数据打交道的话就要写到views下，views目录就是存放模版的


### 模版引擎采取了一种复用思想,通过定义模版,在使用时和数据一起编译,生成HTML页面
1. EJS HTML页面里嵌入模版特性,这对于熟悉HTML的人来说非常简单
2. Pug 缩紧式极简写法的模版引擎
3. Nunjunks  通过-n --nunjucks
````
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
````
这里的ctx.render就是用于渲染模版的方法,他有两个参数
1. index:采用相对路径:对应views目录下的index.pug
2. JSON对象:所谓数据

#### 原理,执行操作如下
1. 通过文件读取 idnex.pug模版
2. 使用Pug模版引擎便器将数据和模版内容编译为HTML字符串
3. 将Content-Type设置为text/html
4. 将statusCode状态码设置为200
5. 通过http模块底层的res.write和res.end方法将HTML字符串写入浏览器

### 布局模版是根据很多页面的共性特点抽象出来的模版,主要用于留空
```
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```
1.  上面body内部的block content就留了一个空, 由继承的模版自行填充内容

```
extends layout

block content
  h1= title
  p Welcome to #{title}

```
2. 上面的#{title}插写了一个数据里的变量,即ctx.render的第二个参数里的数据
```
{
  title:"Hello Koa 2!"
}
```
| 特性 | 描述 | 使用指数

| ------ | ------- | -------

| extends和block | 都与布局相关,几乎所有的模版引擎都支持 ｜
| extends | 都与布局相关,几乎所有的模版引擎都支持 ｜
| case each while if unless | 用于逻辑判断,模版引擎中尽量减少这种逻辑判断,否则会非常复杂 ｜
| include | 用于引用子模版,复用性极好,pug的include还可以传递数据this作为参数 ｜
| mixin | 用于服用模版代码的块级,十分方便,但滥用会导致代码维护极难 ｜
| filer | 支持stylus,less,markdown，coffee,但容易降低代码的可识别度,虽功能强大但不够使用 ｜

###  数据可以从数据库读取m可以访问接口获得,甚至可以模拟,具体取决于业务场景
1. 模版编译时耗时的,所以缓存显得尤为重要,koa-views 依赖 consolidate.js(巩固)模块,consolidate.js可以提供缓存,所以速度相对比较快

## Koa v2中间件的写法
3种(写法不同,但是功能一样的,大家可以凭喜好选用)
 官方推荐async写法(node>7.6)
优先级
1. async 函数优先级最高, 最简单易懂
2. Promise 其次。 await结合promise是非常常见的,通过Promise.race和promise.all等实现并发可以在某种程度上弥补async函数的不足
3. Generator 主要用于Koa v1,通过co 库来调用ES6 Generator


### 通用函数 
通用函数 就是采用Promise方式来处理一步流程的中间件
```
app.use(async (ctx, next) => {
  const start = new Date()
  await next().then(()=>{
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
})
```
### async 
```
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
```
```
app.use(co.wrapfunction * (ctx, next){
  const start = new Date()
  yield next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
```
#### 路由
1. Koa本身提供中间件机制,所以在一个Web应用里,我们只能在app,js内不断叠加中间件
2. 然后在中间件通过ctx.path来判断请求路径
3. 处理各种业务逻辑,这样就会app.js过于臃肿,可读性变差
4. 为了解决这个问题,各种Web框架都会请求处理进行抽象
5. 将请求路径(request,path)和具体的抽取独立文件中形成独立的路由

##### 简单来说 路由就是根据特定请求路径特定处理的中间件,比较简单,初级的解藕方式
```
const router = require('koa-router')()
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
```

```
app.js
const router = require('koa-router')()
const index = require('./routes/index')

router.use('/',inde,routes().index,allowedMethods())

```
## 要点
### get方法支持所有的HTTP动词,比如我们常用的GET、POST、PUT、DELETE等
### 第一个参数是"/index".是相对于基准路径的相对路径
### 这里的相对路径是"1",它的基准路径是/index,最后路径就是 /index/1
### 第二个参数是是Koa中间件,后面会详细讲解

### 区分路径问题
1. koa-router写的路由都可以加载,加载方式和express里一样
2. Koa路由里面的路径默认是带有"/"前缀的,那么访问时具体的路径中就有两个"/"前缀
```
url =/2
router.get('2'，function*(next)){
  this.body = 'this/2!';
}
```

### 路由前缀写法
1. 一个路由文件里会第一多个路由,我们可以为多个路定义同样的路由前缀
```
  routes/users.js
  const router = require('koa-router')()
  router.prefix('users')
```
### 在app.use
app.use方法没有指定请求路径,这和express内置的路由是不一样的,也就是说
我们必须在路由内部自己制定请求路径,否则请求不会被处理
#### 参数只允许两种类型
函数中间件和Generator中间件
### 路由实现原理
1. KOa是一个微内核框架,本身不带任何中间件
2. 包括路由(最终路由转换成中间件),所以Koa的路由有很多种实现方式
3. 其中最常见的是通过Alex Mingoia编写的koa-router模块来实现
5. 该模块最好的一点是,会尽可能地保持一些与Express的路由方法用法一致
6. 让自己的express得以复用

### koa-router的模块配置文件package.json
### 核心是 path-to-regexp
```
  "dependencies": {
    "debug": "^3.1.0",
    "http-errors": "^1.3.1",
    "koa-compose": "^3.0.0",
    "methods": "^1.0.1",
    "path-to-regexp": "^1.1.1",
    "urijs": "^1.19.0"
  },
```

view react写法
```
npm install --save react
app.js
app.use(view(__dirname+'/views'),{
  extension:react
})
参考react组件的写法来修改views目录里的文件
```

```
koa 代码调试
可以参考chrome,Eclipse 或 WebStorm的调试
```

### 框架演进
1. Node.js http模块
初级代码
```
const http  =require('http');
http.createServer((req,res)=>{
  if(req.url=='/'){
    res.end('Hello world')
  }else if(req.url=='/2'){
    res.end('Hello world2')
  }else{
    res.end('Hello world!other')
  }
}).listen(8888)
```

### 最早的Connect
1. 几百个url 用if else 写起来很低效
2. 用到了Connect,Connect是一个用Node.js编写的可扩展的HTTP服务的
```
var connect = require('connect')
var http = require('http');
var app = connect()
// 相应所有请求
app.use((req,res,next)=>{
  res.end('Hellofrom')
})
http.createServer(app).listen(3011)
```
1. 他们都是基于http.createServer的
2. 它们的差异是,createServer参数是独立的,并且在Connect 里通过app.use函数可以挂在多个插件式的中间件
3. Connect 中提供了一个独立的app层
4. Connect 支持中间件写法,可以通过app.use函数挂载中间件
#### 编程分可转可变状态和不可变状态
1. Connect提供了可变部分的插件化 

### 多URL处理
1. Connect如何处理多个URL
app2.js
#### 前面的代码对比,我们可以得出如下的结论
1. app.use的中间件有顺序的
2. 中间可分类:全局的和局部的(路由里生效的)
3. 中间件的定义方法是function(req,res){}
#### Connect返回的是http.createServer参数的回调函数


### ava  
```
mkdir test
npm i -d ava
```
### 测试
1. superTest是express框架里经典的测试Http API的框架
2. 创建test/app.js 代码如下

### Http接口测试
1. superTest是Express 框架经典的测试HTTP API框架
```
touch test/app.js
touch test/app.js
```

### 自动测试
1. 通过监控文件变动来自动执行测试
2. 几乎是一边写代码一边检察测试
3. 原理 通过fs模块里面的watch方法监听文件变动,在AVA里是通过支持-w参数来实现的
```
 ./node_moudles/.bin/ava -v -w
 npm test -- -w
```

### 5种测试写法
1. 第一种写法最简单,代码如下
```
 test('simple test',t =>{
   let c = add(1,2)
   t.is(c,3)
 })
```
2. 支持promise 注意returned用法
```
 test('callback test',t =>{
   return somePromise().then(result=>{
     t.is(resulet,'unicorn')
   })
 })
```
3. 第三种写法原始的回调API，只有遇到t.end()才会结束
```
test.cb('callback test',t=>{
  r.end()
})
```
4. 支持ES6的Generator
```
 test(function *(t){
      const value = yield generatorFn()
      t.true(value)
 } )
```
5. 支持async函数 
test(async t=>{
  const value = await promiseFn()
  t.true(value)
})
### 测试生命周期
1. before 开始
2. after  结束
3. beforeEach 和 afterEach是每次测试用例执行前后要调用的钩子方法
4. afterEach 是每次测试用例前后前后都要调用的钩子方法
```
test.before(async t=>{
  await promiseFn();
})
test.after(async t=>{
  return new Promise()
})
test.beforeEach(async t=>{
    setTimeout(t.end)
})
test.afterEach.cb(async t=>{
   setTimeout(t.end)
})
```

### 原子性测试

1. 在测试数据库增改操作时,顺序执行可能没有问题
2. 但并行执行的时候问题可能就要来了,只有创建是无依赖的，
3. 而删、改、查等操作都需要实现存在对象上才能完成
```
test('GET/'+model+'/:id show',function *(t){
  var res1 = yield superkoa('../../app.js')
  .send({
    'username':'alfred',
    'password':'000000'
  })
  .set({
    'Accept':'application/json'
  })
  .expect('Content-Type',/json/)

  user = res1.body.user
  var res= yield superkoa('../../app.js')
                  .get(`/${model}/${user._id}`)
  t.is(200,res.status)
  t.regex(res.text,/Edit/)
}
```

## 中间件: KOA的核心扩展机制

#### 中间件 主要用于抽象HTTP请求过程 在单一响应式过程中加入中间件,可以更好地应对复杂的业务逻辑
如果把 一个HTTP处理过程比作污水处理
那么中间件就像一层层过滤网
每个中间件在HTTP处理过程中改写和响应数据、状态、实现了特定的功能
HTTP是无状态协议,所以HTTP请求的过程可以这样理解

APP->log中间件->请求响应式中间件->server.listen

1. 请求到达log中间件,记录此时的时间
2. 放过,执行next,此时会执行下一个中间件
3. 执行到请求响应式中间件,通过ctx.body向浏览器输出响应式结果
4. 当响应回到log中间件时,根据当前时间见出请求到达时间,打印出函数,最后把响应写到浏览器里

1. Koa 生成器中间件 被co.wrap包裹被转换成了 function*(){}
2. Koa 生成器中间件 多了 ctx和上面的通用函数中间件一样 
   

ctx是一个完整的HTTP请求的上下文


### ctx.req和ctx.res是更低级的API 是http.createServer的回调函数传进来的参数
koa-bigpipe中间件就是通过原始的res.write来实现 BigPipe分块来写入功能的


http模块的 res.write()是支持分块传输,所以,遵循Koa中间件约定并提供ctx.write和ctx.end()
```
const Koa = require('koa');
const app = new Koa()

const sleep = ms= >new Promise(r=> setTimeout(r,ms))
app.use(require('koa-bigpipe'))

app.use(ctx=>{
  // ctx.body ='Hello Koa'
  ctx.write('loading... <br>')
  return sleep(2000).then(function(){
    ctx.write('timer:200ms<bar>')
    return sleep(5000)
  }).then(function(){
    ctx.write('timer:500ms<bar>'')
  }).then(function(){
    ctx.end()
  })
})

```
### 与浏览器交互
ctx.body(koa)
ctx.redirect(koa 内置)
ctx.render(外部中间件)

#### ctx.body
ctx.body能够以最精简的代码实现最多的功能
返回文本: ctx.body = "Hello Koa 2!";
返回HTML付出  ctx.body = '<h1>Hello Koa 2!</1>'
返回JSON
工作原理:是根据赋值类型来进行不同Content-Type的处理,处理过程分为如下两步

1. 根据body的类型设置对应的Content-type
2. 根据Content-Type调用res.write或res.end,将数据写入浏览器

### ctx.render(模板,数据)
router.ge('/',async(ctx,next)=>{
  await ctx.render('index',{
    title:'Hello Koa 2!'
  })
})

### 回形针一样的中间件
Koa 中间件可以对请求和响应同时进行拦截
这是 Web框架里少有的强大功能,其他Web框架只对请求进行拦截,不对响应式进行拦截
### 探索原理
```
middleware:[]
use:function(fn){
  debug('use:'+fn)
  this.middleware.push(fn);
  return this
},
callback:function(cb){
  const fn = this.compose(this.middleware);
}
compose:function(middleware){
  return function* (next){
    if(!next){
      next =function *(){}
    }
    var i = middleware.length
    while(i--){
      next = middleware(i).call(this,next)
    }
    return  yield*next
  }
}
```
### koa-router
1. 于expree风格的路由 ,使用app.get,app.put,app.post等,可以通过指定方法来访问请求
2. 支持HTTP状态码(405不允许,501方法未实行)
3. 支持多个路由中间件
4. 支持多路由
5. 支持嵌套路由
6. 支持async/await写法
```
npm init
npm install --save koa
npm install --save koa-router
```

普通 路由: '/users'
具名 路由: '/users/:id'
正则 路由: '/^\/commits\/(\w+)(?:\.\.(\w+))?$'
嵌套路由:  上面多种路由形式的组合

### 路由中间件
```
router.use([path],middleware,[...])=>router

```
```
router.get('/user/:id',(ctx,next)=>{
  return User.findOne(ctx.name.id).then(user=>{
    ctx.user = user
    return next()
  })
},
  (ctx)=>{
    console.log(user);
    // =>{id,name:"Alex"}
  }
)
```
### 多种中间件组成的路由可以完成哪些事情
1. 解耦代码,将代码拆分得更细致
2. 实现模块化,通过组装中间件来完成逻辑
3. 实现权限,日之类的AOP(面向切面编程)
4. 实现与Hook(钩子代码)类似的抽象


1. 分别实现增、 删、改、查

GET /users[/] =>user.list()  get 请求资源
POST /users[/] =>user.create() post 创建资源
PATCH /users/:id =>user.update() patch 更新资源
DELETE /users/:id =>user.update() delete 用于删除资源
get.all()方法 无论什么都可以相应，匹配所有的HTTP动词,只能完成与表单无关的功能

get.all() 1.同时支持多种HTTP动词 快速实现功能,不需要深究语义,比如重定向
```
router.all('/login',(ctx)=>{
  ctx.redirect('/sign-in');
  ctx.status = 301
})
```

2. 3个路由是用于页面渲染的

GET /users/new => user.new()
GET /users/;id => user.show()
GET /users/:id/:edit => user.edit()

### 将路由放到目录里
```
mkdir routes
touch routes/index.js
```

### 视图

最好用的视图中间件 koa-view是最好用的一个

#### koa-views 所有被consolidate.js模块支持的模块都是非常好用的

koa-views是全局中间件,可以拦截所有请求,所以后面的所有中间件都可以使用ctx.render()方法进行视图渲染

提供了ctx.state内置对象,并将其作为上下文状态存储
编译模版引擎的时候,模版引擎中的data和ctx.state会合并
合并结果将作为模版引擎使用的最终data

### pug 原名jade 

1. 不需要标签 使用的是选择器 默认标签div可以不写
2. 嵌套关系 用tag和空格来控制 这点和pyhon有点像
3. 通过ctx.render来渲染模版引擎,ctx.render(模版文件',JSON数据)

1. block 代表了可变部分
2. 由继承该布局的模版实现
3. 也就是说index.pug会填充到content里面的block content里去


### consolidate.js(固定 缓存)
koa-views 核心代码
```
var cons = require('consolidate')
cons.pug('view/index.pug',{user:'tobi'},function(err,html){
  if(err) throw err;
  console.log(html)
})
```
通过{cacge:ture/false}

### 静态服务模块
1. 在koa-generator示例里,我们使用了 koa-static
2. koa-static依赖两个模块,分别是debug和koa-send

koa-end
主要就是读取文件,设置Content-type
app.use(function(ctx){
  const fs = require('fs')
  const result fs.readFileSync('./package.json').toSting()
  ctx,type = 'json'
  ctx.body = result
})