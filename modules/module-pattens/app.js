var greet = require('./greet');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed greeting'; 
// changing the value og greeting in greet3.js

var greet3b = require('./greet3');
greet3b.greet();

// calling same file for multiple time wont be called by the node, because it maintains the catch
// module.exports inside a file will be called only once
// we can so easily change the content inside the module that is exported if it is exported as object

var greet4 = require('./greet4');
var grtr = new greet4(); // we are creating the instance in app.js so we cant be able to change the actual values
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();