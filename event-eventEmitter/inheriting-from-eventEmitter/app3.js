'use strict';

var Greetr = require('./greetr3');

var greeter = new Greetr();
greeter.on('greet', function(data) {
    console.log('A greeting occured: ' + data);
});

greeter.greet2('Vijay');