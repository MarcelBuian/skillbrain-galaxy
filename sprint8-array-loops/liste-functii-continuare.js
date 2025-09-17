// find:
// find trebuie sa aiba ca parametru o functie care returneaza un boolean.
// rezultatul va fi primul element din list a carei functie (cu boolean) este adevarat.

const numbers = [4, 9, 16, 25, 29];
console.log("numbers este: ", numbers);

// Asta este functie clasica
function myFunction1(value) {
  return value > 18;
}
let first1 = numbers.find(myFunction1);
console.log("first1 din lista este: ", first1);

// Asta este functie sageata (arrow)
const myFunction2 = (value) => value > 18;
let first2 = numbers.find(myFunction2);
console.log("first2 din lista este: ", first2);

// Asta este functie anonima (fara nume)
let first3 = numbers.find((value) => value > 18);
console.log("first3 din lista este: ", first3);


// filter()
// Asteapta ca parametru un callback (a carei functie va returneaza un boolean)
// Rezultatul va fi doar elementele a carui callback este adevarat.
// lista originala nu este afectata
let list2 = numbers.filter((value) => value > 18);
console.log("list2 din lista este: ", list2);
console.log("numbers", numbers);



// sort (nu returneaza nimic)
const list3 = numbers;
list3.push("13");
list3.sort(function (n1, n2) {
    if (Number.parseInt(n1) < Number.parseInt(n2)) {
        return -1;
    }
    if (Number.parseInt(n1) === Number.parseInt(n2)) {
        return 0;
    }
    return 1;
});
console.log("list3 din lista este: ", list3);
console.log("numbers", numbers);


// Sortarea la nivel de caractere se intampla caracter cu caracter de la stanga la dreapta 
// pe un cod ASCII ()

console.log("123" > "1222");