/**
 * 函数定义
 */
const fs = require('fs');
const path = '.'
fs.readdir(path,function (err,files) {
  if(err){
    return console.log(err)
  }
  console.log(files)
})