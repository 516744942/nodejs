### Node.js内置npm包管理器

1. Node.js以包的形式组织程序模块
2. 包的定义十分简单--包含package.Json文件的目录或归档文件

### 分为两部分
1. Node.js内置的SDK
2. C/c++ 模块


### Node.js SDK 

翻译成中文 "软件开发工具集"
是用来帮一个产品或平台开发应用程式的工具组,由产品的厂商提供,供开发着使用

   | 模块名称       |                                          功能 |                              描述                              |
   | -------------- | --------------------------------------------: | :------------------------------------------------------------: |
   | assert         |             断言,一般用在必要判断或测试框架中 |                    assert.ok或 assert.equal                    |
   | async_hooks.js | 以前成为AsyncWap,用于追踪中一步资源的生命周期 | API发出的消息会将Node.js中所有句柄对象的声明周期告知给Consumer |
   | buffer,js      |                              用于实现数据缓冲 |        Buffer一般用于处理二进制数据,也可以处理字符编码         |
   ｜child_process｜实现多进程任务｜  创建子进程,实现子进程和主进程之间的通信
   | cluster(群)|利用多核CPU实现并行| 可以帮助我们简化并行化程序的开发难度,轻松构建一个用于负载均衡的集群,pm2就是用clister实现
   ｜console.js｜ 将浏览器和终端进行匹配｜和浏览器用法一样,console.log||console.dir
   |constants|对外暴露一些常量|废弃 不推荐使用
   ｜crypto｜加密模块｜对OpenSSL里的HMAC、Cipher、Decipher等算法进行加解密封装 一般用户在进行秘密处理时都会用到改模块
   |dgram(数据报)| 实现UDP报文Socket｜ UDP不属于连接型应用,因而具有资源消耗小,处理速度快等优点一般用户在进行密码处理时都会用到该模块
   |dns|域名解析| 主要API 是lookup和resolve
   |domain(域名)|node8以上才有,用来捕捉异步回调中出现的异常| 即将废弃 不推荐使用
   ｜events｜事件处理，即EventEmitter的实现｜EventEmitter的核心功能就是对时间触发和时间监听功能进行封装
   |fs|文件系统模块,提供一组类似UNIX标准的文件操作API| 主要针对目录, 文件进行操作,开发中使用极其广泛
   |http|搭建HTTP服务器和客户端|node里面使用比较多的模块,可以非常简单地构建web应用,是web框架的底层和辛苦
   |http2|下一代HTTP协议| 在Node.js8里是需要tongguoflag开启的体验功能
   ｜https｜已安全为目标的HTTP通道,是HTTP的安全加强版｜安全基础是SSL,在架构选择上,可以通过Nginx实现,也可以在Node.js应用层上实现
   ｜inspector｜新版本调试协议｜ 主要对inspector进行封装