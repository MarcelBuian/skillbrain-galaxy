// Operatii

let a = 5;
// Cand un operator este string, celalalt se converteaza automat la string (text)
// Semnul "+" este un operator de concatinare intre 2 stringuri.
console.log("a = " + a);

const b = a + 3;
console.log("b = a + 3 = " + b);

// Ridicare la putere
const c = a ** 3;
console.log("c = a ** 3 = " + c);

const d = a / 6;
console.log("d = a / 6 = " + d);
console.log(typeof d);

const e = a % 2;
// % este restul in urma impartirii, care este 1
console.log("e = a % 2 = " + e);

// "/"" este catul
const f = parseInt(a / 2);
console.log("f = parseInt(a / 2) = " + f);

// "/"" este catul
const g = Math.floor(8 / 2);
console.log("g = Math.floor(8 / 2) = " + g);

// Forma prescurtata de a spune a = a + 1;
a++;

console.log("a++ = " + a);

const ana = a + a + 3 + (5 * 6);
console.log("ana = " + ana);

// Forma prescurtata de a spune a = a - 1;
a--;
a--;

console.log("a--; a--; a = " + a);

// Este o forma prescurtata la a = a + 3;
a += 3;
console.log("a += 3; a = " + a);

let text1 = "What a very ";
text1 += "nice day";
// La fel ca si cum ai spune text1 = text1 + "nice day";
console.log(text1);
