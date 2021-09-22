const name = 'gp19'

const sayName = () => {
  console.log(name)
}

console.log('module 1')

// 接口暴露方法一：
module.exports = {
  say: sayName
}

// exports.say = sayName