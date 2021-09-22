### Node.js 是如何执行的

#### 编辑器Clion(node js 源码)


### Process对象
process是Node.js的全局对象,无须引用
在Node.js的任意位置可以使用
Node.js是单进程,单线程
会把所有的进程信息都放到process对象中是非常合理的


#### 用法
1. 统计信息: CPU,内存等
2. 将process 用于信息统计时
3. 事件循环机制: process.nextTick
4. uncaughtException  
uncaughtExceptions是一个非常古老的事件
当node.js发现一个未补货的异常时,便会触发这个事件
如果这个事件中村子啊回调函数,Node.js就不会强制结束进程
5. moduleLoadList属性 是用来描述当前进程已经加载的模块
binding模块,通过process.binding绑定的内部c++模块
NativeModule模块,内部JavaScript模块

### process.binding('contextify')

js最后都是通过 process.binding('contextify') 来进行编译的


### 文件fs模块是最常见的Node.js内置模块之一,其中最常用的当然是读文件和写文件方法
const fs  = require('fs');
fs.readFile('/etc',(req,res)=>{
  if(err) throw err;
  console.log(data)
})

const binding = process.binding('fs');
const fsReqWrap =binding.fsReqWrap
ReadFileContext是一个对象,负责维护当前文件的上下文，改对象只有read和close

4. FSReqWrap是核心实现,是一个与fs相关

binding.open 方法