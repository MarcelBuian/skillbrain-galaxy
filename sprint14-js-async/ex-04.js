import fs from 'fs';

const getTimeNow = () => new Date().toISOString().split("T")[1].replace("Z", "");

console.log("Start: " + getTimeNow());

// Parametrul 3 este o functie callback care va fi apelata doar dupa ce fisierul a fost citit (cu succes sau nu)
fs.readFile('./input/galaxy-team-100MB.txt', 'utf-8', (error, content) => {
    console.log("S-a terminat citirea fisierului " + getTimeNow());
    if (error) {
        console.error("Citind fisierul a fost depistat o eroare:");
        console.error(error);
    } else {
        for (let i=1; i< 30; i++) {
            // Scriem asincron in fisier:
            fs.writeFile(`./output/test${i}.txt`, content, () => {
                console.log(`Fisierul ${i} a fost scris cu success`);
            });
        }
    }
});

console.log("End: " + getTimeNow());

console.log("Sfarsitul programului");

