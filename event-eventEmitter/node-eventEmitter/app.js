var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
    console.log('A greeting occured');
});

emtr.on(eventConfig.GREET, () => {
    console.log('Another greeting occured');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);