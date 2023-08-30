var emitter = require('./index')()

emitter.on('*', function () {
  console.log('all events emitted', this.event)
})

emitter.on('example', function () {
  console.log('example event emitted')
})

emitter.emit('example')

emitter.on('demo', function () {
  console.log('multiple events with `demo` namespace emitted', this.event)
})

emitter.emit('demo:cool')
emitter.emit('demo:awesome')
emitter.emit('demo:great')
