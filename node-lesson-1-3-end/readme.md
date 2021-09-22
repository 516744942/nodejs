### 后端开发

1. API代理 和网关、服务组装 数据库打交道


API 代理
数据库 增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete) 操作
视图模版,提供静态HTTP 资源托管

问题
一个页面的API 非常多
跨域
API返回的数据对前端非常不友好
需求决定API, API反馈不及时

Model Proxy是非常有必要的,让API对前端开发更加友好

服务组装
1. 基于TCP的RPC服务,相比HTTP来说效率更高,能够很好地对系统进行解藕
2. 微服务更是在业务边界分拆方面做到了极致,以业务维度来拆分服务,能够实现小而美
3. 梳理模型层和定制API 都在API Proxy层实现

Node Proxy做了两件事
  分别是输出API和渲染服务

1.  API :前端异步Ajax请求直接访问API
2. 渲染服务: 如果是直接渲染,或者采用BigPipe、WebSocket协议等  需要在服务端组装API,润然后再将结果返回给浏览器

API 网关

 Node.js 擅长I/O操作,其http模块和stream模块组合使用时 非常适合作为代理软件

1. 请求转发和跨域JSONP支持