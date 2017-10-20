var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('A greeting occured');
});

emtr.on('greet', () => {
    console.log('Another greeting occured');
});

console.log('Hello');
emtr.emit('greet');