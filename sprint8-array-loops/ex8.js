const cars = [];

// In Javascript, indexarea elementelor intr-o lista, incepe cu 0, el fiind primul index
// Si se termina cu lungimea listei - 1

cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
cars[3] = "Dacia"

console.log(cars);

for (i=0; i<=cars.length-1; i++) {

    const s = "Masina cu indexul " + i + " este: " + cars[i];

    console.log(s);
}

// Crearea unei liste se poate face si cu new Array(),
const carsAltfel = new Array("Saab", "Volvo", "BMW");
// const carsAltfel = ["Saab", "Volvo", "BMW"];
console.log(carsAltfel.toString());






