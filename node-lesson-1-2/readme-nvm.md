### 第二章 node.js 安装与入门

#### 3m安装法
  
在各个平台都有相关的包管理工具，比如ubuntu下面有apt-get，centos下面有yum，mac下面有brew等，它们都是安装软件的非常方便的利器。但对于Node.js这个版本帝而言，它们是不合适的，首先Node.js的版本更新非常快，开发机器上可能要同时存在几个Node.js的大版本，而npm又有2.x和3.x版本的差异，国内网访问npmjs.org的镜像非常慢，综上种种问题，这里给出我总结的比较好的实践，具体如下

nvm(Node.js Version Manager)：用于开发阶段,解决多版本共存,切换,测试等问题,解决多版本共存、切换问题
npm(Node.js Package Manager)：解决Node.js模块安装问题，其本身也是一个Node.js模块, 每次安装都会内置某个版本的npm
nrm(Node.js Registry Manager)：解决npm镜像访问慢的问题，提供测速，切换下载registry功能


1. nvm
  
nvm是一个开源的Node.js版本管理器,通过简单的shell脚本来管理和切换多个Node.js版本
提供nvm类似功能的还有TJHolowaychuk 写的n以及新发布的跨平台nvs,它们的功能大同小异,相比之下npm稍微强大一些,
n 目前不支持Windows系统 ,而nvm中有nvmw(nvs),可以支持Windows系统

nvm 安装方便,可以 免除安装安装权限
意思是通过curl命令下载install.sh脚本并执行
执行完成后,把nvm命令的执行路径放到～/.bashrc文件下,
我们可以通过cat命令来来查看
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```


当前可以安装的版本node 版本
```
nvm ls-remote 
```

### LTS(long term Support)版本 

###  尝鲜版本 Current

安装Node.js
```
nvm  install 10.15.3
```
确认node的文件位置
```
which node
```
指定默认版本
```
 nvm alias default node
```
 切换版本
```
  nvm use 8
```
列出本级版本
```
nvm ls
```

    v8.1.4 nvm安装
    v12.16.3 nvm安装
    system   系统默认
default -> node (-> v12.16.3) 表示默认版本
node -> stable (-> v12.16.3) (default)
stable -> 12.16 (-> v12.16.3) (default)
iojs -> N/A (default)   如果之前通过apt-get或homebrew安装过Node.js
lts/* -> lts/fermium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.5 (-> N/A)
lts/fermium -> v14.17.5 (-> N/A)


重新安装全局模块(切换导致gulp 无法使用)
```
 nvm reinstall-package 6
```

查看远端可用版本,命令如下
```
   nvm ls-remote
```
指定远端下载地址 https://nodejs.org/dist


### 总结 6个nvm中常用的命令
1. 安装 nvm install 
2. 设置系统默认nodejs版本 nvm alias default
3. 切换版本 nvm use
4. 本地node版本  nvm ls
5. 列出远端可安装版本 nvm  ls-remote
6. 一键安装全局模块  nvm reinstall-packages


### 在项目跟目录创建.nvmrc来指定特定的Node.js版本


