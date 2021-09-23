const EventEmitter = require('events')

class myEventEmitter extends EventEmitter { }

const event = new myEventEmitter()

event.on('play', (value) => {
  console.log('监听1',value)
})
event.on('play', (value) => {
  console.log('监听2',value)
})
event.on('play2', (value) => {
  console.log('监听2',value)
})

event.emit('play',1)
event.emit('play2',1)

console.log(event)