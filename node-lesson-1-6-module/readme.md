# 采用commonJs规范作为标准模块

## Commonjs 规范

1. 是一个规范 
   通过简单的API声明服务器的模块
   目标是让javaScript可以运行在浏览器之外的所有地方
   比如服务器或者本地桌面上应用程序上

1.1规范

1. 定义全局函数
2. 如果被require引用的模块中也包含依赖，则一次加载这些依赖
3. 如果引入失败, 那么require应该暴露异常
4. 模块 应该通过exports来向外暴露API,exports只能是一个对象,暴露的API须作为此对象的属性

1. browserify 工具 可以把node模块编译成浏览器可以用的模块,webpack
2. modules/async派,典型的项目有 RequireJs和SeaJS


### CommonJS规范里没有module.exports对象

```
module.exports  = width=>{
  return{
    area:()=>width**2
  }
}
```

### 浏览器和客户端的两个选择
1. Browserify
2. Webpack