var obj = {
    name: "Vijay Deepak",
    greet: function(param) {
        console.log(`Hi ${this.name} my params are ${param}`)
    }
}

obj.greet('one');
obj.greet.call({name: 'Prince Deepak'}, 'one');
obj.greet.apply({name: 'Prince Deepak'}, ['one']);