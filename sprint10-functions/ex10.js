// Se cere o functie care returneaza true daca users contine mai multi sau egali barbati
//  sau false daca in users se afla mai multe fete

const filterMen = (element) => element.gender === "m";

// Returneaza un boolean
const isMoreMen = (users) => {
    const nrUsers = users.length;
    const nrBarbati = users.filter(filterMen).length;

    // Avem un exemplu de functie anonima
    // const nrBarbati = users.filter(u => u.gender === "m").length;

    return (nrBarbati * 2) >= nrUsers;
}

const users = [
    {nume: "Andrei", gender: "m"},
    {nume: "Denisa", gender: "f"},
    {nume: "Malina", gender: "f"},
];

console.log("Avem users:", users);
console.log(isMoreMen(users) ? "Preponderent barbati" : "Preponderent femei");