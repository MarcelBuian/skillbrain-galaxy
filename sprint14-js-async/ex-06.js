import fs from 'fs';

const { promises : fsp } = fs;

console.log("Start");

// Parametrul 3 este o functie callback care va fi apelata doar dupa ce fisierul a fost citit (cu succes sau nu)
const promise = fsp.readFile('./input/galaxy-team-100MB.txt', 'utf-8');

// then la o promisiune se executa cand e cu succes
promise.then(content => {
    console.log("S-a terminat citirea fisierului ");
    const pr1 = fsp.writeFile(`./output/test1.txt`, content);

    return pr1.then(() => {
        console.log(`Fisierul 1 a fost scris cu success`);
        const pr2 = fsp.writeFile(`./output/test2.txt`, content);

        return pr2.then(() => {
            console.log(`Fisierul 2 a fost scris cu success`);
            const pr3 = fsp.writeFile(`./output/test3.txt`, content);
            
            return pr3.then(() => console.log(`Fisierul 3 a fost scris cu success`));
        });
    })
});

promise.catch(error => {
    console.error("Fisierul nu a fost citit cu succes");
    // console.error(error);
});

promise.finally(() => {
    console.log("(finally) promisiunea s-a terminat de executat!");
})

console.log("End");

