### 异步写法与流程控制

1.  为了姐姐回调地狱问题,便引入了用与流程控制的部分==异步控制流程

### 了解异步流程的调试和模式
### 掌握流程改进的5个阶段及重要特性
### 总结学习重点


1.  异步调用 

chrome-cnode-notifier这个插件专门做这个 等人回复这个事情

2. AJax,即异步javaScript与XML,不再需要重新加载浏览器 可更新Web页面的内容,再也不用不断地打开信息页面去查看新内容了


### 错误优先回调
1. 回调函数通常都是API的最后一个参数
2. 回调参数重会约定回调的内容(err,files)
3. err在前,没有err时第一个参数为空,此为API的约定写法
4. 具体返回结果在后,可以有多种结果

### 异步写法
```
const fs = require('fs')
const path = '.'
fs.readdir(path,function(err,files){
  console.log(files)
})
```
### 同步写法
```
let a = fs.readdirSync(path)
```

### 代码优化
把过滤处理的代码抽象成一个函数一个独立的函数,这样能让代码具有更好的可读性
下面可以通过一个例子来比较下同步和一步的差别,先来看一个异步示例
异步示例
block.js

### 并行任务
parallel.js

### 总结
同步方式更容易理解, 但会造成线程阻塞,无法最大限度地利用系统资源
异步方式需要嵌套回调,即使代码编写得再规范也不容易理解和维护
但它能够并执行,同时处理更多任务,效率更高

###对于变成而言,我们一定希望得到更高效的执行效率,以及最大程度的可控性
node.js实现了高的执行效率,至于如何提升可控性则是开发人员要解决的问题


## Node.js 自带的异步写法
### 两种时间处理方式
1. 分别是callback(回调)和EventEmitter(事件发射器)
callback 错误有限回调方式
EventEmitter 则是事件驱动里的事件发射器

#### 错误优先的回调方式
两条规则
1. 回调函数的第一个参数返回的是error对象
   如果发生错误,该对象会作为第一个参数返回,
   正常返回null
2. 回调函数的第二个参数返回的是所有成功响应的结果数据,如果结果政策,即没有发生错误
   参数err就会被设置为null,并在第二个参数处返回成功相应的结果
function(err,function){

}
写法如下
error.js

解决异常处理的方法
1. 系统错误(请求超时、系统内存不足、连接远程服务失败等)
   
2. 程序员错误 应对办法是启动日志服务,通过日志记录一切


### 函数定义
function(arg1,arg2,...,callback){

}

### 将回调函数作为最后一个参数,进行调用 

### EvenEmitter
1. 事件模块是Node.js内置的对观察着模式的实现
2. 通过EvenEmitter属性提供一个构造函数
3. 具有两个常用方法, 其中on(订阅)方法可以用来监听指定事件,并触发回调函数
4. 另一个emit(发布)方法可以用来发事件,这和消息队列由异曲同工之处

EvenEmitter.js

### 事件
### Node.js SDk
1. events模块   newListener和removeListener
2. once只触发一次
```
 server.once('connection',function(stream){
   console.log('Ah,we have')
 })
```
3. 获取监听器信息

 通过listeners方法实现的,该方法接受一个事件名称作为参数,返回由该事件所有回调函数组成的数组

4. 事件错误处理

和常规回调参数错误处理一样


### 更好的异步流程控制
 Thunk Promise Generator async

 1. 回调地狱

采用错误优先的回调写法,导致SDK里导出的都是回调函数


#### 数据库
#### 爬虫
1. 使用node-crawler进行爬取,发送http请求,基于request实现的
2. 结合jsdom,使用类似于jQuery的DOM操作来解析HTML结果
3. 将这些结果持久化,使结果即可以被写入文件又可以被存入数据库

crawler.js

### async.js
1. 解决回调地狱的方案之一
2. 和async不一样 所以加js后缀
3. 现在用的少了
### Thunk
1. Thunk函数(传名调用的参数值策略) 将参数放到一个零时函数之中 再把这个函数传入函数体 
2. Thunk函数具备两个要素,有且只有一个参数是callback函数，callback函数的第一个参数是error。
3. Thunk函数的作用是将多参数替换成单参数

thunk.js

### Promise
promise-now.js

### 要点
1. 递归: 每个异步操作返回的都是Promise对象
2. 状态机: 三种状态转换,只在Promise 对象内部可以控制,不能在外部改变状态
3. 全局异常处理

### ctx.redirect
浏览器重定向只有两种情况,向前重定向和向后重定向
<!-- 向后重定向 -->
ctx.redirect('back')
ctx.redirect('back',index.html)
<!-- 向前重定向 -->
ctx.redirect('/login')
ctx.redirect('http://google.com')
### ctx.render(模版,数据)
ctx.render是渲染模版使用的方法
实例如下
```
router.get('/',async(ctx,next)=>{
  await ctx.render('index',{
    title:'Hello Koa 2!'
  })
})
```

