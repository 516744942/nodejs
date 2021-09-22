# npm
通常称为Node.js包管理器,
主要功能: 管理Node 包
包括  安装 卸载 更新 查看 搜索 发布等

常见的应用场景
从 npm镜像 服务器下载第三方模块
从npm 镜像 服务器下载并安装命令 行程到本地
自己发布模块到npm 镜像服务器供他人使用

###   安装Node.js时,npm 也一并安装好了

npm -v5 新增了package.lock.json 在操作依赖时默认生产,用于记录和锁定依赖树的信息, 与yarn类似


npm本身就是 一个nodejs模版 命令来升级
```
[sudo] npm install -g npm
```
### 使用npm安装模块
1. 本地local npm -h install
2. 全局安装   -g

常用选项 
无选项   安装node_modules  但不保存到package.json里
-save-prod   -p 保存到package.json里面的dependencies
-save-dev   -D 保存到package.json里面的devDependencie
-global     -g  全局安装

### 本地安装,具体如下
1. 没有node_modules
2. npm 命令目录生产
3. 可以通过 require()引入本地安装的包

### 全局安装
1. 如果不是nvm安装 安装将放在  /usr/local下  需要超级用户授权
2. nvm 安装 放到用户目录nvm版本对应的bin目录    ～/.nvm/versions/node/v6.0.0/bin/ 下
3. 不能通过require()来引入本地安装的包

采用nvm 安装Node.js 基本不会再遇到全局安装时的权限问题
为了避免引用 缺失 npm i -save 是个好习惯


