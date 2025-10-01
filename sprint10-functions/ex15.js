// Functiile de obicei au un numar concret de parametri (se mai numesc argumente)
// Poate fi inclusiv 0


// Aceasta functia are 0 parametri
const f1 = () => "Hello";
console.log(f1());

// Aceasta functie are 1 parametru
const f2 = (s) => `Hello, ${s}`;
console.log(f2("Skillbrain"));

// Aceste functie are 3 parametri
const f3 = (a, b, c) => a + b + c;
console.log("Suma la 1+2+3 = ", f3(1, 2, 3));

// Aceasta functie are un numar nedefinit de parametri, reprezentat ca o lista (un array)
const f4 = (...p) => p.join(", ");
console.log(f4(2, 4, 6, 8, 10));