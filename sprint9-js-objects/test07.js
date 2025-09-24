const car = {
  brand : 'Volvo',
  model : 'EX90',
};

car.year = 2001;

delete car.model;

// console.log(car);

// console.log(
//     Object.entries(car)
// );

console.log(
    JSON.stringify(car)
)

// console.log(car.toString());

// Ca sa vedem toate cheile unui obiect, folosim Object.keys(car)
console.log(Object.keys(car));

// Ca sa vedem toate valorile unui obiect, folosimn Object.values(car)
console.log(Object.values(car));
