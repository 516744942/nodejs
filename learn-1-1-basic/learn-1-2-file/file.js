const fs = require('fs');

fs.writeFile('.log.txt','洗哈哈', (err, data) => {
  if(err){
    console.log(err)
  }else{
    console.log('文件创建成功')
  }
})