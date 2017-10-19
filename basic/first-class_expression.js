// function statement
function greet() {
    console.log('hi');
}
greet(); // functionn invocation

// functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet); // function invocation

// function expression
var greetMe = function() {
    console.log('Hi Vijay');
}
greetMe(); // function invocation

// it's first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(() => { console.log('Hello Vijay') });