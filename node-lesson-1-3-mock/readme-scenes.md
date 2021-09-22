 ### node涉及的场景

 1. 大前端
 2. API接口
 3. RPC服务(OLTP)
 4. OLAP
 5. 数据挖掘
 6. AI

其中擅长
1. 大前端: 前端端分离
2. PAI接口: 典型的web应用
3. RPC服务: 主要是对OLTP(联机事务处理过程)数据库进行操作,复杂还是用go和java比较好


#### 贯穿开发权过程


1.  静态API(Mock API)
2.  简单实现 用express 加 koa这样的成熟框架
3.  著名的typicode/json-server 想实现REST API 只需要编辑db.json, 然后放入数据即可


json-server db.json --routes routes.json
