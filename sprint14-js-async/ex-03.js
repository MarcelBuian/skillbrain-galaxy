import fs from 'fs';

const getTimeNow = () => new Date().toISOString().split("T")[1].replace("Z", "");

console.log("Start: " + getTimeNow());

const content = fs.readFileSync('./input/galaxy-team-100MB.txt', 'utf-8');
for (let i=1; i< 30; i++) {
    // Scriem asincron in fisier:
    fs.writeFile(`./output/test${i}.txt`, content, () => {
        console.log(`Fisierul ${i} a fost scris cu success`);
    });
}
console.log("End: " + getTimeNow());

console.log("Sfarsitul programului");

