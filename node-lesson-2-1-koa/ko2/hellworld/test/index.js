'use strict'
// import test from 'ava';
const test = require('ava');

function add(a, b) {
  return a + b
}

test('simple test', (t) => {
  let c = add(1,2)
  t.is(c,3)
})
// test('simple test1', (t) => {
//   let c = add(1,2)
//   t.is(c,4)
// })


