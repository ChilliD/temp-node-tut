const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, num) => {
    console.log(`Name: ${name}, Num: ${num}`)
})

customEmitter.on('response', () => {
    console.log('received')
})

customEmitter.emit('response', 'test', 21)