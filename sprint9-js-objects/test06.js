const car = {
  brand : 'Volvo',
  model : 'EX90'
};

console.log(car['brand']);
// Cand stim exact numele proprietatii: folosim punct:
console.log(car.brand);

// Cand nu stim exact numele proprietatii, dar vrem sa folosim o variabila, atunci folosim []:
const brand = "model";
console.log(car[brand]);

// Se poate si asa:
const getKey = () => "mod";
console.log(car[getKey() + "el"]);



// const a = 12 + 45 * 56 + 34 / (23 + 34) = 

// console.log(car[getKey() + "el"]) => 

const cheie = getKey() + "el"; // mod + el // model
const a = car[cheie];
console.log(a);

