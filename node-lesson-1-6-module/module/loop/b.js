console.log('b starting');
exports.done = false
var b = require('./a');

console.log('in b ,a.done')

exports.done = true
console.log('b done')