import fs from 'fs';

console.log("Start");

// Parametrul 3 este o functie callback care va fi apelata doar dupa ce fisierul a fost citit (cu succes sau nu)
fs.readFile('./input/galaxy-team-100MB.txt', 'utf-8', (error, content) => {
    console.log("S-a terminat citirea fisierului ");
    if (error) {
        console.error("Citind fisierul a fost depistat o eroare:");
        console.error(error);
    } else {
        // Scriem asincron in fisier:
        fs.writeFile(`./output/test1.txt`, content, () => {
            console.log(`Fisierul 1 a fost scris cu success`);
            fs.writeFile(`./output/test2.txt`, content, () => {
                console.log(`Fisierul 2 a fost scris cu success`);
                fs.writeFile(`./output/test3.txt`, content, () => {
                    console.log(`Fisierul 3 a fost scris cu success`);
                });
            });
        });
    }
});

console.log("End");

