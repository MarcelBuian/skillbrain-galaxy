function afiseazaStudentii(studenti)
{
    console.log(studenti);
    // studenti.forEach(
    //     student => console.log("Studentul " + student + " a facut tema de casa")
    // );
}

const studenti1 = ["Tiberiu", "Adriana", "Razvan", "Eduard"];
// spread operator:
const studenti2 = [...studenti1];

studenti1.push("Madalina");
console.log("\n\nStudenti1");
afiseazaStudentii(studenti1);

studenti2.push("Denisa");
console.log("\n\nStudenti2");
afiseazaStudentii(studenti2);

console.log("\n\nStudenti1 (din nou)");
afiseazaStudentii(studenti1);

console.log("Gata");





