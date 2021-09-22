# 创建NOde.js 标准流程 
```
$ npm init - y
$ npm install --save koa@next
$ touch app.js
```


首先进行npm初始化
无论项目大小
它自己必须是一个模块
必须要有package.json
使用npm 安装koa模块,安装之后才可以使用,
创建app.js 
读取文件成功后将返回 "Hello koa"字符串


### forever(崩溃重启的模块) 现在被PM2代替
1. 进程因异常退出是很常见的事,当遇到崩溃推出的时候,重启就可以了
2. 全局安装 这个模块,然后终端中就有了 forever命令
```
$ [sudo] npm install forever -g
$ [sudo] npm install pm2 -g
```
```
forever start app.js
pm2 start app.js -i 0 --name "modern-node.js"
pm ls
```

### 小集群:单台服务器上多个实例
使用 cluster模块
主机端口通过负载均衡算法将请求转发到Slave机器上,在一台机器上启动多个实例，原理也是类似的

### 单个县城会死
1. 单个应用实例可以适当捕获异常,减少崩溃率
2. 单个应用实例崩溃之后,采用forever或PM2自动启动,可以继续服务
3. 利用多核集群同在一台服务器上启动多个实例,崩溃的几率极低
4. 多台服务器也要做集群