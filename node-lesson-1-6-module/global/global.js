
global.debug = true
console.log('global',global)
/**
 * 扩展方法时的写法如下
 */
global.log =console.log 
var a =1
log('全局方法')

/**
 * 下面两个创建文件用来演示盐焗对象的用法
 * 多个文件共享变量时不容易控制
 * 所以一般我们要要尽量慎用global,否则会初心啊莫名其妙的Bug
 */
require('./a')
require('./b')
/**
 * log的方法来减少代码量,
 * 也可以使用本例中的blobal.debug方法设置是否开启日志
 */


