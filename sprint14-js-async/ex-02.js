import fs from 'fs';

const getTimeNow = () => new Date().toISOString().split("T")[1].replace("Z", "");

console.log("Start: " + getTimeNow());

const content = fs.readFileSync('./input/galaxy-team-100_MB.txt', 'utf-8');
for (let i=1; i< 100; i++) {
    fs.writeFileSync(`./output/test${i}.txt`, content);
}

console.log("End: " + getTimeNow());

console.log("Sfarsitul programului");
