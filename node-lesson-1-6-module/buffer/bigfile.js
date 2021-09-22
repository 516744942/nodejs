/**
 * 读取大文件, 示例如下
 * Buffer与字符串间的转换会产生绩效的性能消耗
 * highWaterMark 是缓存区能容纳的最大子结束,默认是16kb
 * 在文件读取时候,highWaterMark设置也会对性能产生严重影响
 * 设置过小,可能会导致系统调用次数过多,如果刺出不设置 { highWaterMark: 5 },则默认的stream中切割data快的单位是8kb
 */


/**
 * 内存的分配策略遵循一下原则
 * 大块内存直接分配
 * 小块内存通过内存池来分配
 * Buffer.poolSize = 8*102
 */

const fs = require('fs');
const rs = fs.createReadStream('readme.md', { highWaterMark: 5 });
var dataArr = [], len = 0, data;
rs.on("data", function (chunk) {
  dataArr.push(chunk)
  len += chunk.length
});
rs.on('end', function () {
  data = Buffer.concat(dataArr,len).toString()
  console.log(data)
  console.log(dataArr)
  console.log(len)
})