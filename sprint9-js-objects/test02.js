const person = {
    age: 20,
    sayHello() {
        console.log("Hello, " + this.age + " years");
    },
};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
// person.age = 50;
person.eyeColor = "blue";

const a = [1,2,3];


console.log(person.sayHello());


