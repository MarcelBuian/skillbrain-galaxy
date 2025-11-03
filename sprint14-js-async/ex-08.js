import fs from 'fs';

// Aici destructuram fs
const { promises : fsp } = fs;

// fs.promises => fsp
// fs.promises.readFile => fsp.readFile

console.log("Start");

// Parametrul 3 este o functie callback care va fi apelata doar dupa ce fisierul a fost citit (cu succes sau nu)
const promise = fsp.readFile('./input/galaxy-team-100MB.txt', 'utf-8');

// then la o promisiune se executa cand e cu succes
promise.then(content => {
    console.log("S-a terminat citirea fisierului ");
    fsp.writeFile(`./output/test1.txt`, content)
        .then(() => fsp.writeFile('./output/test2.txt', content))
        .then(() => fsp.writeFile('./output/test3.txt', content))
        .then(() => console.log(`Toate cele 3 fisiere au fost scrise cu success`))
        .catch((error) => console.log("Eroare scriere fisier"))
    ;
});

promise.catch(error => {
    console.error("Fisierul nu a fost citit cu succes");
    // console.error(error);
});

promise.finally(() => {
    console.log("(finally) promisiunea s-a terminat de executat!");
})

console.log("End");

