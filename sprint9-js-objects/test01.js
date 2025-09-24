// 1. Orice obiect are {}
// 2. Orice obiect (care nu este gol) are elemente sub forma: cheie:valoare, (la cheie se mai zice proprietate)
// 2.1. orice cheie trebuie sa fie un "string". Poate fi scrisa si fara ghilimele.
// 2.2. valoare poate fi orice tip de date
// 3. Cand sunt mai multe elemente, se pune virgula intre ele
// 3.1 virgula poate fi adaugata si dupa ultimul element. Exceptie face parte tipul de date JSON
// 4. orice obiect este un tip de date complex (nu este primitiv)

// Diferenta intre tipuri de date complexe si primitive:
//  Variabile primitive (in javascript) isi aloca propriul spatiu de memorie in RAM
//   iar orice referinta catre variabila primitiva isi aloca propriul spatiu
//.   let a = 5; let b = a; a = 7; // b ramane 5
//. Variabilile complexe isi aloca doar un singur pointer care are spatiul sau de memorie.
//.  iar orice referinta la acea variabila este un alt pointer catre aceeasi zona de memorie.
//.   let a = {nume: "Ana"}; b = a; b.nume = "Denisa" => a.nume = Denisa
// Copierea unui obiect (sau lista) in javascript se intampla doar pe primul nivel!

// cel mai simplu obiect
const o1 = {};
console.log(o1);

// definim un obiect cu o singur element:
const o2 = {"nume": "Alexandra"}
const o2a = {nume: "Alexandra"}
console.log(o2, o2a);

// valoarea unei chei poate fi orice alt tip:
const o3 = {
    varsta: 23,
    is_male: true,
    name: "Tiberiu",
    date: new Date,
    marks: [9, 10, 8],
};

console.log(o3);

// valoare poate fi chiar un alt obiect:
const o4 = {
    "23-sept-2025": {
        varsta: 22,
        "sal": "hello",
        notes: {
            "status": "unknown",
        }
    },
    "24-sept-2025": o3,
    "25-sept-2025": {},
    "a": null,
}

console.log(o4);


const a = {nume: "Ana"};
const b = {...a};
b.nume = "Denisa";

console.log(a,b);


