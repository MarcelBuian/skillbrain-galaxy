class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} scoate un sunet.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} latră 🐶.`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    // cu acest cuvant "super" apelam constructorul parinte
    super(name);
    this.color = color;
  }
  speak() {
    console.log(`${this.name} (de culoare ${this.color}) miauna.`);
  }
}

const rex = new Dog("Rex");
 // Rex latră 🐶
rex.speak();

const piscotel = new Cat("Piscotel", "black");
piscotel.speak();
