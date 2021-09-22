## 数据库基础

1. 异步流程控制
2. web框架
3. 数据库
4. 模版引擎

## 入门
### 选择数据库
MEAN  MongoDB+Express+Angular+Node.js

关系型数据库的基础是关系代数
1. 结构化数据
2. 表链接在一起时会产生一个笛卡尔乘积

### 非关系数据库用于解决4个问题

1. 数据的高并发读/写
2. 数据的高可用、海量数据的存储
3. 海量数据的存储
4. 实时分析

### 在macOS上安装
1. 首先安装homebrew，已有就跳过
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
2. 借助 HomeBrew这个方便的包管理工具,具体方法如下
```
 brew update
 brew install mongodb

 sudo mkdir -p /data/db
 sudo chown -R 'whoami' /data/db

 mongo
```

通过命令启动MongoDB有点麻烦
```
/bin/bash
mkdir -p tmp/db
mkdir -p tmp/pids
mkdir -p tmp/logs

remove lock file
[-f tmp/db/mongod.lock]&& rm -rf tmp/db/mongod.lock
tpuch tmp/pids/mongodb/pid
```
启动
```
nobup mongod --bind_ip 127.0.0.1 --port 27017 --dbpath tmp/db --longpath tmp/logs/mongodb.log --pidfilepath tmp/pids/mongdb.pid>mongod.log 2> & 1
```

1. 创建目录db、pids 和logs
2. 如果有锁文件,则需要移除
3. 创建进程id文件
4. 通过mongod 命令启动服务器,制定目录 IP地址 日志 进程号等


### 将shell脚本潜入npm  以二进制模块的方式进行全局安装 mh就是这样的启动模块
```
npm i -g mh
mh
```
当mh在当前目录下启动时,数据独立
当mhg在用户主目录下启动时候,数据共享