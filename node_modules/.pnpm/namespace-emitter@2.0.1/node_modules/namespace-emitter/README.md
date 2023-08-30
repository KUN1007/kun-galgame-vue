# namespace-emitter

A small event emitter with namespaces.

Not meant as a replacement for node's events module, but as a small component for browser js.

## Install

    npm install --save namespace-emitter

## Example

```js
var emitter = require('namespace-emitter')()

emitter.on('*', function () {
  console.log('all events emitted', this.event)
})

emitter.on('example', function () {
  console.log('example event emitted')
})

emitter.emit('example')
// -> example event emitted
// -> all events emitted example

emitter.on('demo', function () {
  console.log('multiple events with `demo` namespace emitted', this.event)
})

emitter.emit('demo:cool')
// -> all events emitted demo:cool
// -> multiple events with `demo` namespace emitted demo:cool

emitter.emit('demo:awesome')
// -> all events emitted demo:awesome
// -> multiple events with `demo` namespace emitted demo:awesome

emitter.emit('demo:great')
// -> all events emitted demo:great
// -> multiple events with `demo` namespace emitted demo:great
```

## API

### createNamespaceEmitter

Create an event emitter with namespaces

**Examples**

```javascript
var emitter = require('./index')()

emitter.on('*', function () {
  console.log('all events emitted', this.event)
})

emitter.on('example', function () {
  console.log('example event emitted')
})
```

### emit

Emit an event. Optionally namespace the event. Handlers are fired in the order in which they were added with exact matches taking precedence. Separate the namespace and event with a `:`

**Parameters**

-   `event` **String** – the name of the event, with optional namespace
-   `data` **...Any** – data variables that will be passed as arguments to the event listener

**Examples**

```javascript
emitter.emit('example')
emitter.emit('demo:test')
emitter.emit('data', { example: true}, 'a string', 1)
```

### off

Stop listening to an event. Stop all listeners on an event by only passing the event name. Stop a single listener by passing that event handler as a callback.
You must be explicit about what will be unsubscribed: `emitter.off('demo')` will unsubscribe an `emitter.on('demo')` listener, 
`emitter.off('demo:example')` will unsubscribe an `emitter.on('demo:example')` listener

**Parameters**

-   `event` **String** 
-   `fn` **[Function]** – the specific handler

**Examples**

```javascript
emitter.off('example')
emitter.off('demo', function () {})
```

### on

Create en event listener.

**Parameters**

-   `event` **String** 
-   `fn` **Function** 

**Examples**

```javascript
emitter.on('example', function () {})
emitter.on('demo', function () {})
```

### once

Create en event listener that fires once.

**Parameters**

-   `event` **String** 
-   `fn` **Function** 

**Examples**

```javascript
emitter.once('example', function () {})
emitter.once('demo', function () {})
```

## License

[MIT](LICENSE.md)
