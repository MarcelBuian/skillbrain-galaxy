class Car {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 5;
    }

    getInfo() {
        console.log(`${this.brand} are viteza ${this.speed} km/h`);
    }
}

const car = new Car("Toyota");
const car2 = new Car("Volvo");

car.accelerate();
car.accelerate();
car.brake();
// Toyota are viteza 15 km/h aici
car.getInfo();

// Mai acceleram cu 10 km/h
car.accelerate();

// Volvo are viteza 0 km/h
car2.getInfo();

// Toyota are 25 km/h
car.getInfo();
