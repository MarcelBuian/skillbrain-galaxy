// Se cere o functie care returneaza cati (un rezultat intreg) utilizatori minori avem intr-o lista.

// Scriem doar functii pure (care nu modifica variabilele aferent functiei)

// Functia callback apelata in functia .filter se vrea a returna un boolean 
function filterUserEsteMinor(user) {
    // Rezultatul trebuie sa fie un boolean (true / false), cu alte cuvinte o conditie.
    return user.age < 18;
};

function getDoarMinori(users) {
    // Find returneaza o noua lista cu toate elemente al carei conditii (din functia callback) este adevarata
    return users.filter(filterUserEsteMinor);
}

function getFirstMinor(users) {
    // Find returneaza primul element al carei conditii (din functia callback) este adevarata
    // in cazul nostru elementul este un obiect
    return users.find(filterUserEsteMinor);
}

const getNumarulDeMinori = (utilizatori) => {
    return getDoarMinori(utilizatori).length;
}

const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 17 },
    { name: 'Mircea', age: 11 },
    { name: 'Matei', age: 160 },
];
  
console.log("Avem lista de users ", users);

const numarulDeMinori = getNumarulDeMinori(users);
const minorii = getDoarMinori(users);

// console.log("Printre ei se afla " + numarulDeMinori + " minori");

console.log(`Printre ei se afla ${numarulDeMinori} minori`);
console.log('Minorii sunt: ', minorii);
console.log("First minor este: ", getFirstMinor(users));