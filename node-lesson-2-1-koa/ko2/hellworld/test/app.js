const test = require('ava');
const superTest = require('supertest')
// const superkoa = require('superkoa')
const koa = require('../app')

const app = koa.callback()

test.cb('GET / ', (t) => {
  superTest(app)
    .get('/')
    .expect(200, (err, res) => {
      // t.ifError(err)
      let userId = res.body.id;
      t.regex(res.text, /Hello Koa/, 'res,text===Hello Koa')
      t.end();
    })
})
// test.cb(`GET /${model}/:id show`, (t) => {
//   var res1 = yield superkoa('../app.js')
//   superTest(app)
//     .get('/api/' + model)
//     .send({
//       'username': 'alfred',
//       'password': '000000'
//     })
//     .set(
//       'Accept','application/json'
//     )
//     .expect('Content-Type', /json/)
//   user = res1.body.user
//   var res = yield superkoa('../../app.js')
//     .get(`/${model}/${user._id}`)
//   t.is(200, res.status)
//   t.regex(res.text, /Edit/)
// })

test.cb('/json ', (t) => {
  superTest(app)
    .get('/json')
    .expect(200, (err, res) => {
      // t.ifError(err)
      let userId = res.body.id;
      let value = JSON.parse(res.text)
      t.is(value.hasOwnProperty('title'), true)
      // t.regex(res.text, /Hello Koa/, 'res,text===Hello Koa')
      t.end();
    })
})
