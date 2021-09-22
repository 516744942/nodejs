#### es模块人门
模块可以通过export关键词对外到处很多内容
这些到处的内容可以通过名字进行访问
下面的代码是es模块
直接倒入

```
import * as fs from 'fs';
const fs = require('fs')
```

按需导入
实质是从fs模块中加载readFile方法,
不加载其他方法
这种加载陈为编译记载或者静态加载
即es6可以在编译时完成模块加载,效率更高
```
import {readFile} from 'fs'
```

模块导出
es6提供了很多种对外导出的方式
对外到处所有内容(除了默认导出部分),方法如下
```
export * from 'src/other_module'
```
通过别名导出
```
  export {foo as myFoo,bar} from  'src/other_module'

  export {default } form 'src/other_module'
  export {default as foo } form 'src/other_module'
  export {foo as default } form 'src/other_module'
```
具名导出

导出对象的指定别名,即所谓的具名导出
```
export {MY_CONST as FOO,myFunc};
export {foo as default};
```

### 内联具有导出
变量声明的方式由多种,在内联具名导出时不做限制,方法如下
```
  export var foo;
  export let foo;
  export const foo;
```

函数声明的方式如下
```
export function myFunc(){}
export function* myGenFunc(){}
```
类声明的方式如下
export class myClass {}

默认导出
默认导出default 关键词,
在引用时默认返回导出对象,对于默认导出,函数导出,函数声明(可以是匿名函数)的方式如下
```
 export default function myFunction (){}
 export default function (){}
 export default function* myGenFunc(){}
 export default function * () {}
```
  类声明(可以是匿名类)的方式如下, 注意最后的分号
```
 export default foo;
 export default 'Hello world!';
 export default 3*7
 export default （function(){})
```
### es模块示例 

1. Vue是最早一批对ES模块支持的框架,我们看一下Vue v2.5.13的package.json文件里的具有体配置项##