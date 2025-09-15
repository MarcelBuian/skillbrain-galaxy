// Functii de tip arrow (sageata)

aduna_doua_numere = (a, b) => a + b;

const c = aduna_doua_numere(4, 2);
console.log("c = ", c);

convertToUpperCase = s => s.toUpperCase();

const s1 = "Hello";
const s2 = " World";

const s3 = s1 + s2;
const s4 = convertToUpperCase(s3);

console.log("s3 = " + s3);
console.log("s4 = " + s4);

const invelesteStringul = (sir, invelitor) => {
    let sirNou = invelitor;
    sirNou = sirNou + sir;
    sirNou = sirNou + invelitor;

    return sirNou;
}

const s5 = invelesteStringul("Programarea este cool", '___');
console.log("s5=", s5);

const invelesteStringul2 = (sir, invelitor) => invelitor + sir + invelitor;

console.log(invelesteStringul("Javascript", '@@@'));
console.log(invelesteStringul2("Javascript", '@@@'));


/// Functia clasica:
function invelesteStringul3(sir, invelitor) {
    return `${invelitor}${sir}${invelitor}`;
}


console.log(invelesteStringul3("Javascript", '!!!'));