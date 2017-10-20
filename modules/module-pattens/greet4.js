function Greetr() {
    this.greeting = 'Hello Vijay';
    this.greet = () => {
        console.log(this.greeting);
    }
}

module.exports = Greetr; // exporting the function that give the ability to create new object in app.js