var greeting = "Hello Deepak";

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}
// this pattern will just expose the name that remaining properties and methods what we need to expose will remains private
// this is called revealing module pattern 