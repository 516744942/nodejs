###  第一个参数必须命名为t
声明测试
```
const test = require('ava');

test('my passing test', t => {
	t.pass(); //通过
});
```

连续运行测试
```
  test.serial('passes serially', t => {
	t.pass();
});
``