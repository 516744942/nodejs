### 更好的npm替代品 --Yarn

1. yarn是开源的JavaSCript包管理器
2. npm在扩展内部使用时 遇到了大小、 性能、和安全等方面的问题
3. yarn能够为参与同一个项目的所有用户
维持相同的节点模块目录结构,
有助于减少难以追踪的bug,
能在多台机器上复制

特点
1. 本地缓存文件的性能更好
2. 可以并执行一些操作,加速了对新模块的安排处理
3. 使用lockfile, 并且能狗确定的算法创建一个跨所有机器的一致文件
4. 出于安全性考虑,在安装进城里不允许编写宝的开发者执行其他代码

脚本安装
```
$ curl -0- -L https://yarnpkg.com/install.sh|bash
```

npm 安装
```
npm install  --galbal yarn 
```

项目初始化
```
yarn init 
```
增加依赖模块,代码如下
```
yarn  add [package]
yarn  add [package] @ [version]
yarn  add  [package] @ [tag]
```
更新依赖  
```
yarn upgrade [package]
yarn upgrade [package] @ [version]
yarn upgrade [package] @ [tag]
```
移除依赖
```
 yarn remove [package]
```
在项目中安装依赖
```
 yarn 
 yarn install
```


安装全局模块 yarn global 命令 等同于 npm install--global命令
```
yarn global add kp
```