var greetings = require('./greetings.json');

var greet = () => {
    console.log(greetings.en);
}

module.exports = greet;