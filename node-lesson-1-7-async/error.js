module.exports = function (dragonName, callback) {
  var dragon = createDragon(dragonName);
  // 注意,第一个参数是error,如果没有错误,则它的默认值是null
  return callback(null, dragon);
}

function readJSON(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    let parsedJson;
    // 如果出现错误
    if (err) {
      return callback(err)
    }
    // JSON.parse是同步函数所以将其放在try-catch,但是在回调函数里面不能轻易使用
    // 如果没有错误,则第一个参数为null,第二个参数是具体结果
    try {
      parsedJson = JSON.parse(data)
    } catch (error) {
      return callback(error)
    } finally {
      
    }
    callback(null, JSON.parse(parsedJson))
  })
}