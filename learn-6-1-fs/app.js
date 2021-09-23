const fs = require('fs')
const fsPromise = require('fs').promises
/**
 * 创建文件夹
 */
// fs.mkdir('logs.js', (err, data) => {
//   if (err) throw err
//   console.log('文件创建成功')
// })

/**
 * 改文件夹的名字
 */

// fs.rename('./logs', './log', (err,data) => {
//   if(err) throw err
//   console.log('文件夹名字修改成功')
// })

/**
 * 移除 文件夹
 */
// fs.rmdir('./log', (err, data) => {
//   if(err) throw err
//   console.log('删除成功')
// })
/**
 * 读
 */
// fs.readdir('./a', (err, data) => {
//   if (err) throw err
//   console.log('读取成功', data)
// })
/**
 * 写入
 */
// fs.writeFile('./a/index.js', '"hello \n world"', err => {
//   console.log('done')
// })
/**
 * 添加内容(继续写入内容)
 */
// fs.appendFile('./a/log1.js', '!!!', (err, data) => {

//   console.log('添加成功')
// })
/**
 * 删除文件
 */
// fs.unlink('./a/log1.js', (err, data) => {
//   console.log('删除成功')
// })
/**
 * 查询文件内容
 * 是个buffer
 * 转义 第二个参数 utf-8
 */
// fs.readFile('./a/index.js', 'utf-8', (err, data) => {

//   console.log('读取文件内容', data)
// })
/**
 * 方法二 读取文件
 */
// fs.readFile('./a/index.js', (err, data) => {
//   console.log(data.toString())
// })

/**
 * 读取文件
 * 异步
 */
fs.readFile('./a/index.js', (err, data) => {
  console.log(data.toString())
})
console.log('同步')

/**
 * node 10以上 promise
 */
// fsPromise.readFile('./a/index.js').then(data=>{
//   console.log(1,data.toString())
// })
// fsPromise.readFile('./a/index.js').then(data=>{
//   console.log(2,data.toString())
// })

/**
 * 
 */

// ;(async()=>{
//   let result = await  fsPromise.readFile('./a/index.js')
//   console.log(result)
// })()

/**
 * 批量写入
 */
// for (var i = 0; i < 10; i++) {
//   fs.writeFile(`./logs/log-${i}.txt`, `log-${i}`, (err) => {
//     if (err) throw err
//     console.log('done.')
//   })
// }
/**
 * fs.readdir('./',(err,data)=>{
 *   console.log(content)
 * })
 */
// fs.readdir('./', (err, content) => {
//   content.forEach((value, index) => {
//     fs.stat(`${value}`, (err, stat) => {
//       if (stat.isDirectory()) {
//         fs.readdir(`./${value}`, (err, content) => {

//         })
//       }
//     })
//     // if(fs.stat)
//   })
// })
/**
 * 读取深层文件
 */
function readDir(dir) {
  fs.readdir(dir, (err, content) => {
    content.forEach((value, index) => {
      let joinDir = `${dir}/${value}`
      fs.stat(joinDir, (err, stats) => {
        if (stats.isDirectory()) {
          readDir(joinDir)
        } else {
          fs.readFile(joinDir,'utf-8',(err, content) => {
            console.log(content)
          })
        }
      })
      // if(fs.stat)
    })
  })
}
readDir('./')

fs.watch(`./logs/log-0.log`,(err,data)=>{
  console.log('file has changed.')
})