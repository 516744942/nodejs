# nrm 模块管理工具

1. 默认将模块托管在npmjs.org下
2. 这么非官方的镜像会定期和npm官方进行同步,一般1-分钟左右进行一次
3. npm 官方源 是在国外托管的,所以对于国内用户来说,访问起来速度会慢一些
4. 本身又遵守小而美哲学而导致模块依赖

### nrm之间进行切换，它默认内置了很多常用的源

安装
```
 [sudo]npm install  --global nrm
```
###   测速 
*是当前正在使用的源
```
 npm test
```

npm ---- 1051ms
yarn --- 1605ms
cnpm --- 1871ms
* taobao - 177ms
nj ----- Fetch Error
npmMirror  1491ms
edunpm - 2170ms
youzan - 753ms


### 查看源
一般我们需要了解 组件当前使用的是哪个源头
其他源 是无法通过 npm publish命令成功发布的

```
nrm ls
```
 npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
  youzan ----- http://registry.npm.qima-inc.com/

切换源
  ```
  nrm use cnpm
  ```
正加源头

内网安装、安装速度快
私有模块,仅供企业内部使用,更加安全
适合多团队开发,前后端都可以使用私有源头进行管理

通过nrm添加自定义npm源的命令如下
推荐使用cnpm不熟私有源镜服务器
cnpm本身是 private npm for company
```
nrm add yourcompany http://registry.npm.yourcompony.com/

```

从源码进行编译



