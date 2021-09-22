# HTTPS
## HTTPS是以安全为目标的HTTP通道
### SSL secure Socket Layer 安全套接字层
    是位于可靠的面向连接的网络协议层和应用协议层之间的一种协议层
    实现客户端和服务端的通信安全
    SSL由两部分组成 SSL纪录协议和SSL握手协议
### TLS transport Layer Security  安全传输层协议
  TLS纪录协议和TLS握手协议

## HTTPS涉及的主题有3个
1. 通常指浏览器,也可以客户端
2. 服务端 一般支持HTTPS的网站 GItHUb
3. 证书颁发机构

HTTPS提供的 服务
1. 认证用户和服务器,确保数据被发送到了正确的客户机和服务器上
2. 加密数据 以防止数据被途中窃取
3. 维护数据的完整性,确保数据在传输过程中不被改变


### 交互过程 3个阶段
1. 认证服务器
2. 协商会话秘钥
3. 加密通信

### 生成HTTPS 证书
```
1. curl https://get.acme.sh | sh
```
把acme 安装到home 目录下
```
~/ .acme.sh/
``
创建一个bash的alias,方便使用
```
 acme.sh = ~/.acme.sh/aceme.sh
```
在终端使用,通过NDS模式进行验证

```
acme.sh --issue --dns -d  www.xxx.com

```
配置的域名生效后,执行如下命令
````
acme.sh --renew -d xixihaha.com \ 
```
公钥和证书文件
```
acme.sh tree www.xixihah.com -l 3
```
### https://github.com/acmesh-official/acme.sh/wiki/dns-manual-mode
### www.xixihaha.com