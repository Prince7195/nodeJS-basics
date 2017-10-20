var fs = require('fs');

var greet = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data) => {
    console.log(data);
});
console.log('Done');