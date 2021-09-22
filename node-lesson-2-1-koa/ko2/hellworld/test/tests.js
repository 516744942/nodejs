const test = require('ava');

test('my passing test', t => {
  t.pass(); //通过
});
// 连续运行测试
/**
 * 默认情况下，测试是并发运行的
 * 但是，有时您必须编写不能并发运行的测试
 * 在这些罕见的情况下
 * 您可以使用.serial修饰符
 * 它将强制这些测试在并发测试之前串行运行
 */
test.serial('passes serially', t => {
  t.pass();
});

//  承诺支持
// 测试可能会返回一个承诺。AVA 将在结束测试之前等待承诺解决。如果 promise 拒绝，则测试将失败。
test(' resolves with unicorn', t => {
  return  Promise.resolve('unicorn').then(result => {
    t.is(result, 'unicorn');
  });
});
// 异步函数支持
// AVA 内置了对异步函数的支持。
test('async',async function (t) {
	const value = await Promise.resolve(true);
	t.true(value);
});

// Async arrow function
test('promises the truth', async t => {
	const value = await Promise.resolve(true);
	t.true(value);
});
// 可观察的支持
// AVA 内置了对observables 的支持。如果您从测试中返回一个 observable
// AVA 将在结束测试之前自动使用它直到完成。
test('handles observables', t => {
	// t.plan(3);
	// return Observable.of(1, 2, 3, 4, 5, 6)
	// 	.filter(n => {
	// 		// Only even numbers
	// 		return n % 2 === 0;
	// 	})
	// 	.map(() => t.pass());
  t.pass()
});

// 回调支持
// AVA 4 取消了对test.cb()和 的支持t.end()。

// test.cb('data.txt can be read', t => {
// 	// `t.end` automatically checks for error as first argument
// 	fs.readFile('data.txt', t.end);
// });

// 运行特定测试
// 在开发过程中，只运行几个特定的​​测试会很有帮助。
// 这可以使用.only修饰符来完成：

/**
 * 
 * test('will not be run', t => {
 *	t.fail();
 *});
 * 
 * test.only('will be run', t => {
 *	t.pass();
 * });
 * 
 * 
 */

// 跳过测试

// 有时失败的测试很难修复。您可以使用.skip修饰符告诉 
// AVA 暂时跳过这些测试。它们仍会显示在输出中（因为已被跳过）但永远不会运行。
// 您必须指定实现功能。您可以将.skip修饰符用于所有测试和挂钩，但不能用于.todo(). 您不能将更多修饰符应用于.skip.
// 如果测试可能会失败一段时间，请.failing()改用
test.skip('will not be run', t => {
	t.fail();
});

// 测试占位符（“todo”）
// 您可以.todo在计划编写测试时使用修饰符。
// 与跳过的测试一样，这些占位符显示在输出中。他们只需要一个头衔；您不能指定实现功能。

test.todo('will think about writing this later');
// 您可以发出需要编写串行测试的信号：
test.serial.todo('will think about writing this later d');

// 失败的测试
/**
 * 您可以使用.failing修饰符来记录需要修复的代码问题
 * 失败的测试和正常的测试一样运行
 * 但它们预计会失败，并且不会破坏你的构建
 * 如果标记为失败的测试实际上通过了
 * 它将报告为错误并使构建失败
 * 并显示一条有用的消息，指示您删除.failing修饰符。
 * 这允许您.failing在不破坏 CI 的情况下在实施修复之前合并测试。
 * 即使报告者无法实际解决问题，这也是识别具有提交信用的良好错误报告 PR 的好方法。
 */
// See: github.com/user/repo/issues/1234
test.failing('demonstrate some bug', t => {
	t.fail(); // Test will count as passed
});
