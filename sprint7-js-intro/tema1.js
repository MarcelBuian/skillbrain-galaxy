// Returnează un boolean dacă un număr este divizibil cu 10
// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

// Exemplu 1:
// Input: 100
// Output: true

// Exemplu 2:
// Input: 23
// Output: false

const isDivisibleBy = (n, divisor) => n % divisor === 0;

const isDivisibleByTen = n => isDivisibleBy(n, 10);

const a = 100;
console.log("a = " + a);
console.log("a este divizibil cu 10? ", isDivisibleByTen(a));

const b = 23;
console.log("b = " + b);
const rez2 = isDivisibleByTen(b);
console.log("b este divizibl cu 10? ", rez2);

function esteDivizibilCuZece(a) {
    if (a % 10 === 0) {
        return true;
    }

    return false;
}

// function esteDivizibilCuZece(a) {
//     return a % 10 === 0;
// }

const c = 200;
console.log("c = " + c);
const rez3 = esteDivizibilCuZece(c);
console.log("c este divizibl cu 10? ", rez3);


