/**
 * superTest
 * superTest是最著名的用于测试Node.jsHTTP服务的模块 
 * 对于测试APP和断言的过程进行了很好的优化,其用法如下
 * 
 */

const request = require('supertest');
const express = require('express');
const { userInfo } = require('os');
const app = express()
app.get('/user', (req, res) => {
  res.status(200).json({ name: 'tobi' })
})
request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-length', 15)
  .expect(200)
  .end((err, res) => {
    if (err) throw err
  })

// supertest的参数非常简单 ,只要传入app 对象即可
// 用于测试Web框架时 无须启动Web服务器,可以直接进行测试
// 内置断言、更简单、友好
// 将测试框架和supertest模块组合使用会获得更好的效果
// restful-router是一个结合测试框架使用supertest的例子
// 它使用Mocha作为测试框架,其BDD风格的写法如下
describe('restful-router.test.js', () => {
  it('shold get /users/:id=>userInfo.show', (done) => {
    request(app)
      .get('/users/123')
      .expect('GET /users/:id=> show, query :{},params:{"id":"123"}')
      .expect(200, done)
  })
});
// 结合AVA测试框架一起使用
test('async', async t => {
  let res = await request(app)
    .get('/')
  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text' === 'Hello Koa')
})
