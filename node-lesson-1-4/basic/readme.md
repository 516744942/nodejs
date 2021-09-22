### delegate(把什么委托给他人)

1.  在js里面 可以把一个对象的方法、属性等委托给另一个对象
2.  Koa的上下文对象ctx可以访问 request或response上的方法
3.  原因在于, request或response上的方法属性被委托给了ctx对象

将上面的代码委托给reponse上的属性
```
 const delegate = require('delegates');
 delegate(proto,'response')
 .method('redirect')
 ...
 .access('body')
 ...
```
将上面的代码委托给reponse上的属性,
```
app.use(function(ctx,next){
  ctx.body ='xxx'
  // ctx.redirext('/url')
})
```
### only(this,Array) 返回白名单属性
在Koa源码 里经常见到toJSON()方法的具体实现,代码如下 
这里的only是一个Node.js模块,用于返回对象的白名单属性,尤其适用于 类的方法非常多 但只想暴露部分属性的情况
```
toJSON(){
  return only(this,[
    'method',
    'url',
    'header'
  ])
}
```