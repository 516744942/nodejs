### 区别

其实module.exports才是真正的接口
exports只不过是它的一个辅助工具,最终将结果返回给调用方的是module.exports
而不是exports 
所有的exports收集到的属性和方法,最终都复制给了module.exports
如果module.exports有一些方法,那么exports收集来的信息将被忽略



### 模块可以任何合法的JavaScript对象,布尔值、日期、JSON、字符串、函数、数组、对象等


### 如果是实例化对象就用exports
### 如果是特定的类型就用module.exports

### 除了工具类用exports.xxx 绝大多熟情况下我们都用module.exports
