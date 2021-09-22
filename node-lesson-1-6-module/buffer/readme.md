### Buffer

1.   JavaScript对于二进制非Unicode编码数据无能为力
2.   所以node.js在SDK里面内置了Buffer类
3.   Buffer代表一个缓冲区,用于储存二进制数据或,俗称字节流,是I/O传输时常用的处理方式
4.   相比于字符串,Buffer可以免去编码和解码的过程
5.   节省了CPU成本
6.   HTTP、TCP、UDP、IO、数据库、处理图片、表文件上传等操作,都会用到Buffer
7.   另外,Buffer其实也是stream的基础


### Buffer 的应用场景有以下几种
1. 在使用net或http模块来接受网络数据时,可用Buffer作为数据结构进行传输,即data的事件的参数
2. 用于大文件的读取和写入,以前fs读取的内容是string,后来都该用Buffer,在大文件读取上,性能和内存有明显优势
3. 用于字符串转码,进制转换 Unicode虽然能满足绝大部份场景,但有时候还是不够,用于把Buffer对象解码成字符串,但会保留编码过多字节UTF-8与UTF-16字符
4. 用作数据结构,处理二进制数据,也可以处理字符串编码


### 初始化Buffer有很多方法,具体如下
1. new Buffer()  //不推荐
2. Buffer.from()
3. Buffer.alloc() // 分配
4. Buffer.allocUnsafe()
5. Buffer.allocUnsafeSlow()

用的比较多的就是 From和alloc
  
```
let buffer =Buffer.from('Hello World!');
console.log(buffer)
console.log('Hello World'.length)
// buffer <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
// 11
```
### 这些是十六进制的字节编码, 每个元素都是0~255之间的整体

H对应的ASCII码是72,十进制转为十六进制后的结果是48

1. 1个Buffer类似于一个整数数组,对于V8内存之外的一块原始内存
2. Buffer.from(string[, encoding])，第二个参数是编码方法,如果不传这个参数(将默认使用UTF-8编码)
3. Buffer和JavaScript字符串之间的转换需要显示地调用编码放啊来完成