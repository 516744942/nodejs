# Koa是 Node.js社区公认的下一代web框架
## 学习目标
1. 了解Koa框架
2. 学会koa-generator用法
3. 掌握Node.js Web框架的演进过程

### 特点,异步流程控制特性

#### 通过组合各种更高级的异步流程控制中间件 来避免重复繁琐的回调函数嵌套
#### 极大提升参见错误的处理效率

1. Koa的代码量非常少,大约600行,是一个极轻量的框架,
2. 一个基于http模块进行封装的,提供中间件写法的微内核模块
3. Koa约定了中间件写法
4. 能够完成Web应用里的所有需求

## 应用场景
1. 传统web开发 带有视图渲染和数据库操作的Web应用
2. 作为服务端接口 使用Koa可以提供HTTP API支持
3. 作为独立的API层 以使用Koa作为API代理,来请求后端API,处理后再将返回给前端
4. RPC服务组装    将RPC服务将其包装成最终的HTTP API提供调用,不涉及数据库操作,可以按照前端要求的格式处理
5. 静态API模拟    提供静态API接口
6. API 网关      HTTP代理是非常简单的,使用Koa能够更好地请求转发
7. 使用Node.js 实现HTTP代理是非常简单的,请求转发
8. 与前端框架继承,
9. 开发web框架



## 开发要点
1. Koa中间件
2. ES6语法
3. HTTP基础
4. 异步流程控制  推荐顺序是 async=>promise ->Generator
5. 数据库操作:   几乎所有的Web应用都涉及操作数据库
6. API接口开发

## Koa入门

1. Koa v2的核心是shying面向更新特性的async函数的中间件
   正式版发布前 支持3种中间件写法(promise Generator async)
   发布后,推荐使用es2017的async中间件

## 安装

```
npm init -y 
npm i =s koa@2
touch app.js
```
ko1 是一个函数
ko2 是一个类

### 为什么要使用Koa
1. async 函数做一步流程控制,代码更容易理解
2. 错误处理干干净净,都能非常好地处理异常,另外Koa是继承自Event的,结合ctx里的一些API能够更简单地处理错误
3. 具有优雅的回形针中间件机制
4. 性能非常好
5. Koa核心代码量比较好,易于定制,易于在其上开发各种Web框架
6. 社区生态逐渐完善
7. Node的web框架是Koa
8. 拥有Egg.js(基于Koa的成熟的企业级Web开发框架)
9. 拥有MidwayJs,他基于Egg.js生态,使用TypeScript编写


Koa 脚手架
1. koa-generator 是用于生成Koa项目骨架的生成器
2. 有几遍的目录结果和中间件,可以满足一般性的开发需求
3. 功能如下 
   生成项目骨架,集成必要的中间件
   约定目录结果

   app.js为入口
   bin/www为启动入口
   支持静态服务器,即public目录
   支持routes目录
   支持view视图目录
   支持view试图目录
   默认将Pug(之前名字是Jade)作为模版引擎

### 创建 helloword
   ```
   koa2 helloword
   ```
   