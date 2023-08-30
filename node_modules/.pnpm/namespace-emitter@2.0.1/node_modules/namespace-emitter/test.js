var test = require('tape')
var createEmitter = require('./index')

test('create an event listener', function (t) {
  var emitter = createEmitter()
  emitter.on('example', function () {})
  t.ok(emitter._fns, 'emitter should have a `_fns` object')
  t.ok(emitter._fns['example'], 'emitter `_fns` object should have an `example` property')
  t.end()
})

test('emit to an event listener', function (t) {
  var emitter = createEmitter()

  emitter.on('example', function (data) {
    t.ok(data.example)
    t.end()
  })

  emitter.emit('example', { example: true })
})

test('emit to an event listener with a namespace', function (t) {
  var emitter = createEmitter()

  emitter.on('test', function (data) {
    t.ok(data.example)
    t.end()
  })

  emitter.emit('test:example', { example: true })
})

test('remove all listeners of an event', function (t) {
  var emitter = createEmitter()
  var count = 0

  emitter.on('example', function (data) {
    t.ok(data.example)
    count++
  })

  emitter.on('example', function (data) {
    t.ok(data.example)
    count++
  })

  emitter.emit('example', { example: true })
  emitter.off('example')
  emitter.emit('example', { example: true })
  t.equal(count, 2)
  t.end()
})

test('remove when no listeners are registered', function (t) {
  var emitter = createEmitter()

  t.doesNotThrow(function () {
    emitter.off('example', function () {})
  })
  t.end()
})

test('listen to all events', function (t) {
  var emitter = createEmitter()
  var count = 0

  emitter.on('*', function () {
    count++
    if (count === 3) {
      t.end()
    }
  })

  emitter.emit('example')
  emitter.emit('test')
  emitter.emit('ok')
})

test('listen to an event only once', function (t) {
  var emitter = createEmitter()
  var count = 0

  emitter.once('example', function () {
    count++
  })

  emitter.emit('example')
  emitter.emit('example')
  t.equal(count, 1)
  t.end()
})

test('passes all arguments to event listener', function (t) {
  var emitter = createEmitter()

  emitter.on('example', function (a, b, c, d, e, f) {
    t.ok(a)
    t.ok(b)
    t.ok(c)
    t.ok(d)
    t.ok(e)
    t.ok(f)
  })

  emitter.emit('example', 1, 2, 3, 4, 5, 6)
  t.end()
})

test('unsubscribe event listeners', function (t) {
  var emitter = createEmitter()
  function fn () { t.fail('should not be called') }
  emitter.on('example', fn)
  function fn2 () { t.fail('should not be called') }
  emitter.on('example', fn2)
  emitter.off('example')
  t.end()
})

test('unsubscribe single event handler', function (t) {
  var emitter = createEmitter()
  emitter.on('example', function () {})
  function fn () { t.fail('should not be called') }
  emitter.on('example', fn)
  emitter.off('example', fn)
  t.end()
})

test('unsubscribe event handler that has been subscribed twice', function (t) {
  var emitter = createEmitter()
  function fn () { t.fail('should not be called') }
  emitter.on('example', fn)
  emitter.on('example', fn)
  emitter.off('example')
  t.end()
})

test('unsubscribe one event handler, but keep others', function (t) {
  t.plan(1)

  var emitter = createEmitter()
  function fn () { t.fail('should not be called') }
  function fn2 () { t.pass('should be called') }

  emitter.on('example', fn)
  emitter.on('example', fn2)
  emitter.off('example', fn)

  emitter.emit('example')
  t.end()
})

test('emit event when unsubscribed in event callback', function (t) {
  var emitter = createEmitter()

  emitter.on('example', function () {
    emitter.off('example')
    t.ok('emitted once')
  })

  emitter.off('example')
  t.end()
})

test('callback is required for on method', function (t) {
  var emitter = createEmitter()

  try {
    emitter.on('example')
  } catch (e) {
    t.ok(e)
  }

  t.end()
})

test('handler only called once if namespaced', function (t) {
  var emitter = createEmitter()
  var count = 0

  emitter.on('example:first', function (data) {
    t.ok(data.example)
    count++
  })

  emitter.emit('example:first', { example: true })
  t.equal(count, 1)
  t.end()
})

test('both namespaces and wildcard listeners are called', function (t) {
  var emitter = createEmitter()
  var count = 0

  emitter.on('*', function (data) {
    t.ok(data.example)
    count++
  })

  emitter.on('example', function (data) {
    t.ok(this.event)
    t.ok(data.example)
    count++
  })

  emitter.emit('example:first', { example: true })
  t.equal(count, 2)
  t.end()
})
