// Modul clasic de a lucra cu obiecte (fara clasa)
const car = {
  brand: "Toyota",
  speed: 0,
  accelerate() {
    this.speed += 10;
  },
  brake() {
    this.speed -= 5;
  }
};

const car2 = {
  brand: "Volvo",
  speed: 0,
  accelerate() {
    this.speed += 12;
  },
  brake() {
    this.speed -= 7;
  }
};

car.accelerate();
car.brake();
// 
console.log(car.speed);
