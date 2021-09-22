/**
 * EvenEmitter
 * 建立一个 EvenEmitter对象实例
 * 这个实例就是消息中心
 * 
 */

const EvenEmitter = require('events');
const observer = new EvenEmitter();
observer.on('topic', function () {
  console.log('topic has  occured')
})
console.log('observer', observer._events)
// 遇到错误的时候会触发error事件
// 增加一个监听者的时候会触发newListener
// 移除一个的时候会触发removeListener

function main() {
  console.log('start');
  observer.emit('topic')
  console.log('end')
}
main()
/**
 * 继承EventEmitter类
 * events只提供了一个对象
 * dui
 */
const util = require('util');
let MyEmitter = function () {

}
util.inherits(MyEmitter, EvenEmitter)
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this)
})
myEmitter.emit('event', 'a1', 'b');
myEmitter.emit('event', 'a2', 'b');
myEmitter.emit('event', 'a3', 'b');
myEmitter.emit('event', 'a4', 'b');
myEmitter.emit('event', 'a5', 'b');
myEmitter.emit('event', 'a6', 'b');
myEmitter.emit('event', 'a7', 'b');
myEmitter.emit('event', 'a8', 'b');
myEmitter.emit('event', 'a9', 'b');
myEmitter.emit('event', 'a10', 'b');
myEmitter.emit('event', 'a11', 'b');
myEmitter.emit('event', 'a12', 'b');
myEmitter.emit('event', 'a13', 'b');
console.log()
for (const key in myEmitter._events) {
  if (Object.hasOwnProperty.call(myEmitter._events, key)) {
    const element = myEmitter._events[key];
    console.log(key)
  }
}

/**
 * 设置最大监听数
 * node允许同一个事件最多制定10个回调函数
 * setMaxListeners(20)
 */