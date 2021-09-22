const test = require('ava');
// 像test()这些方法一样，
// 有一个可选的标题和一个实现函数。
// 如果您的挂钩无法执行，则会显示标题。
// 该实现是用一个执行对象调用的。
// 您可以在钩子中使用断言。您还可以传递宏函数和其他参数。
test.before(t => {
  console.log(1)
	// This runs before all tests
  t.pass();
});

test.before(t => {
  console.log(2)
	// This runs concurrently with the above
  t.pass();
});

test.serial.before(t => {
	// This runs after the above
  console.log(3)
  t.pass();
});

test.serial.before(t => {
	// This too runs after the above, and before tests
  console.log(4)
  t.pass();
});

// .afterEach.always()在测试后使用钩子进行清理
// 您可以使用t.teardown()撤消副作用内特定的测试
test.after('cleanup', t => {
	// This runs after all tests
  console.log(7)
  t.pass();
});

test.after.always('guaranteed cleanup', t => {
	// This will always run, regardless of earlier failures
  console.log(8)
  t.pass();
});

test.beforeEach(t => {
	// This runs before each test
  console.log(5)
  t.pass();
});

test.afterEach(t => {
	// This runs after each test
  console.log(6)
  t.pass();
});

test.afterEach.always(t => {
	// This runs after each test and other test hooks, even if they failed
  t.pass();
});

test('title1', t => {
	// Regular test
  t.pass();
});