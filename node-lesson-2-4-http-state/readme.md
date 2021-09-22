### state
1. 500 Internal Server Error
2. 403 forbidden
3. 404 Not Found
4. 304 Not Modified
5. 200  OK

### Cookie
1. 是在HTTP下,服务器或脚本维护客户工作站上存在的一种信息形式
2. 是由web服务器保存在用户浏览器上的小文本文件
3. 无论何时,只要用户连接到服务器,web站点就可以访问Cookie信息
4. 它可以包含有关用户的信息,无论何时,只要用户连接到服务器,web站点就可以访问Cookie信息


### 处理过程
 1. 服务器向客户端发送Cookie
 2. 客户端的浏览器保存起来
 3. 然后在每次请求浏览器时将Cookie发送到服务器端
 4. 在HTTP文档呗发送之前,web服务器
 5. 在HTML文档被发送之前,Web服务器会通过传送HTTP包头中 的Set-Cookie消息一个Cookie发送到用户的浏览器中

### 属性 
name =value   内容赋值
maxAge 最大失效时间(ms)
signed Cookie值签名
path  Cookie 影响到的路径  如果路径不能匹配,浏览器就不发送这个Cookie
domain Cookie影响到的域名
secure  在http中无效
httpOnly 无法通过程序读取到Cookie信息,防止XSS攻击
Expires  缓存失效时间(s)

### 在node.js 中 Cookie是通过response.writeHead被写入的
```
  response.writeHead({
    'set-Cookie':'myCookie=type=koa',"language=javascript;path=''"
  })
```
###Koa中写入Cookie
ctx.cookies.set('name','koajs',{signed:true})
