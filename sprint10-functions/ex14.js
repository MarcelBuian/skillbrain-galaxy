// Functia reduce:

const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 26 },
];

// Vrem o functie care sa creeze o lista de numele utilizatorilor majori.
// Folosind functia reduce

const callbackFn = (accum, item) => {
    if (item.age > 18) {
        accum.push(item.name);
    }
    
    return accum;
}

// Diferenta la reduce este ca primeste 2 parametri: primul este un callback (functie),
//  iar al doilea este valoarea initiala care poate fi orice tip de date.
const adultUserNames = users.reduce(callbackFn, []); 

console.log("users = ", users);
console.log("adulti = ", adultUserNames);