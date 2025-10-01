// Se cere o functie care returneaza cati (un rezultat intreg) utilizatori minori avem intr-o lista.

// Scriem doar functii pure (care nu modifica variabilele aferent functiei)

// Functia callback apelata in functia .filter se vrea a returna un boolean 
function filterUserEsteMajor(user) {
    // Rezultatul trebuie sa fie un boolean (true / false), cu alte cuvinte o conditie.
    return user.age >= 18;
};

const getNumarulDeMinori = (utilizatori) => {
    const utilizatoriMajori = utilizatori.filter(filterUserEsteMajor);

    // Se poate simplifica si sa folosim o functie anonima (fara nume) direct aici:
    // const utilizatoriMajori = utilizatori.filter((user) => user.age >= 18);

    return utilizatori.length - utilizatoriMajori.length;
}

const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 17 },
    { name: 'Mircea', age: 11 },
    { name: 'Matei', age: 16 },
];
  
console.log("Avem lista de users ", users);

const numarulDeMinori = getNumarulDeMinori(users);

// console.log("Printre ei se afla " + numarulDeMinori + " minori");

console.log(`Printre ei se afla ${numarulDeMinori} minori`);