// Numarul de milisecunde trecut din 1970:
const a = Date.now();

// Aici apelam functia log doar cu un parametru (care este un string mare concatinat)
console.log("numarul de milisecunde din data 1970 1 ianuarie este: " + a);

// Aici apelam functia console.log cu doi parametri, prin urmare fiecare parametru poate avea tipul sau
console.log("numarul de milisecunde din data 1970 1 ianuarie este:\n", a);


// Cream un obiect cu clasa (date) folosind ca parametru numarul de milisecunde
const d1 = new Date(a);
console.log(d1);

// Cream un nou obiect cu clasa date, cu un nr de milisecunde mai mic cu un an:
const d2 = new Date(a - 365 * 24 * 60 * 60 * 1000 );
console.log(d2);
