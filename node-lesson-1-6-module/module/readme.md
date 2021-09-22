### 核心技术

1. 模块引用
2. 模块定义
3. 模块标识


require 用来引用模块
export 用来到处模块 包括标识符和模块内容
module.exports 对外导出的对象只能有一个
exports.xxx 对外到处的值可以有多个


### 模块
模块可以将关联代码封装到一个代码单元中
创建一个模块可以理解为把全部有关联的函数放到一个文件中

示例
```
sayHelloInEnglish = function(){
  return "Hello"
}
sayHelloInChinese = function(){
  return "你好"
}

module.exports = ()=>{
  return {
    sayHelloInEnglish,
    sayHelloInChinese,
  }
}

```