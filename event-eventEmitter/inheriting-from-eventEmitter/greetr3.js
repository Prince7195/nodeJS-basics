'use strict';

var Emitter = require('events');

module.exports = class Greetr extends Emitter {
    constructor() {
        super();
        this.greeting = 'Hello Welcome!';
    }

    greet2(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }

}