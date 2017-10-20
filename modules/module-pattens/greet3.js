function Greetr() {
    this.greeting = 'Hello Vj';
    this.greet = () => {
        console.log(this.greeting);
    }
}

module.exports = new Greetr(); // exporting an object