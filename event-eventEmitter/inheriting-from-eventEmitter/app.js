var Emitter = require('events');
var util = require('util');

function Greetr() {
    Emitter.call(this); // makes every methods inside events.js available to all objects created here
    this.greeting = 'Hello Welcome!';
}

util.inherits(Greetr, Emitter);

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greetr();
greeter1.on('greet', function() {
    console.log('A greeting occured');
});

greeter1.greet();

Greetr.prototype.greet2 = function(data) {
    console.log(this.greeting);
    this.emit('greet', data);
}

var greeter2 = new Greetr();
greeter2.on('greet', function(data) {
    console.log('A greeting occured: ' + data);
});

greeter2.greet2('Vijay');