var bench = require('nanobench')
var EventEmitter = require('events').EventEmitter

bench('namespace-emitter: emit 200,000 times', function (b) {
  var emitter = require('../index')()

  b.start()

  emitter.on('event', function (data) {})

  for (var i = 0; i < 200000; i++) {
    emitter.emit('event', { message: 'hi' })
  }

  b.end()
})

bench('EventEmitter: emit 200,000 times', function (b) {
  var emitter = new EventEmitter()

  b.start()

  emitter.on('event', function (data) {})

  for (var i = 0; i < 200000; i++) {
    emitter.emit('event', { message: 'hi' })
  }

  b.end()
})
