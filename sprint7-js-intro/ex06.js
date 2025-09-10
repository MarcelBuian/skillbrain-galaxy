// Se muta virgula cu 5 unitati mai la dreapta
// Initial: 3.0000000
// dupa e+5:   300000.0
const a = 3.0e+5;

console.log(a);

// virgula se muta cu 3 unitati mai la stanga:
// 00002.5 => 0.0025
const b = 2.5e-3;
console.log(b);

// Numerele prea mari, sunt afisate in console.log automat sub forma stiintifica: (un trilion)
const c = 1_000_000_000_000
// d va fi egal cu un numar foarte mare (septilion),
//  adica 1 urmat de 24 (12 + 12) zerouri: 1_000_000_000_000_000_000_000_000
const d = c * c;
console.log(d);

const x = 1 / d;
// x va fi un numar extrem de mic: zece la puterea minus douăzeci și patru
console.log(x);