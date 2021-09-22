### 事件循环机制

1. 事件循环是libuv的核心,他所有的内容操作的基础上

### 生命周期
timers  // 执行seTimeout和setInterval设定的回调
I/o     // 执行绝大部分的回调   除了close和setImmediate()设定的回调
idle,prepare    仅内部使用
poll    // incoming connections data etc    获取新的I/o事件,在适当的条件下， Node会在这里阻塞  
check   // setImmediate()设定的回调回在这一阶段执行
close callbacks  socket.on('close',callback)的回调会在这个阶段执行

### 说明

每个阶段都有一个先入先出(FIFO)的用于执行回调的队列
通常当事件循环运行到某个阶段时Node.js会先执行该阶段的操作
然后再去执行改阶段队列里面的回调
直道队列的内容耗尽或者执行 回调数量的最大(maximum number)
然后进入下一阶段,如此往复,直到进程结束

在poll阶段，任何一步操作都可能会调度更多操作和心的被处理事件
这些操作内核来进行调度的,当选中的事件等待处理时候,poll事件便要进行排队
因此回调过长会导致poll阶段比timers阶段运行运行的时间更长

### 不包括process.nextTick()的内容

1. microtask(微任务)和macrotask(宏任务)
2. 先处理microtask队列里的事件,然后再从macrotask队列中取出一个事件并执行
3. 在同一次事件循环中,microtask永远在macrotask之前执行

microtask
1. process.nextTick
2. promise

macrotask 
1. setTimeout
2. setInterval
3. setImmediate
4. I/O


 Process.nextTick(callback)
 用于下一次循环中调用回调函数的,与setTimeout(fn,0)的功能类似但更为高效
 将一个函数推迟到代码执行的下一个同步方法执行完毕
 或者异步回调函数开始执行时再执行
 
