// Un string poate fi create folosind ghilimele `"`
const a = "Ana are mere";
console.log(a);

// Poate fi folosit si folosind apostroful `'`
const b = 'El a spus: "Mergem acum?"';
console.log(b);

const c = "El a spus: \"Mergem acum?\"";
console.log(c);

// Aceasta instructiune este gresita, pentru ca orice string trebuie sa fie incapsulat intre `"`, `'`, ``` 
// Toate aceste simboluri nu sunt potrivite pentru delimitarea unui string: de ex: « », „ ”
// const d = „Abordare gresita„;

// Cream un string cu delimitarea caracterului accent grav (`)
// Se afla de obicei, la butonul tilda (~) apasand SHIFT pe el
const d = `Programarea este fun`;
console.log(d);