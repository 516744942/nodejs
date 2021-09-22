const fs  = require('fs');
var a = fs.readFileSync('./a.js')

console.log(a)
console.log(typeof a) // Object
console.log(a instanceof Buffer) //