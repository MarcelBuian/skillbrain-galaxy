
const studenti = ["Adriana", "Victor"];

// 1. length - o proprietate
console.log(studenti.length);

// 2. toString()
console.log(
    studenti.toString()
);

// 3. at()
console.log(studenti[1]);
console.log(studenti.at(1));

// 4. push()
studenti.push("Denisa");

// 5. join()
console.log(
    studenti.join(" _ ")
);

// 6. pop() => face 2 lucruri: returneaza ultimul student, si il scoate din lista
console.log("studentii inainte pop", studenti);
const ultimulStudent = studenti.pop();
console.log("ultimulStudent", ultimulStudent);
console.log("studentii dupa pop", studenti);

// 7. shift() => il sterge pe primul
console.log("studentii inainte shift", studenti);
const primulStudent = studenti.shift();
console.log("primulStudent", primulStudent);
console.log("studentii dupa shift", studenti);

// 8. unshift() => adauga un element in fata listei:

// 9. delete => sterge doar valoarea unui element ! nu este o functie
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits before delete", fruits);
delete fruits[1];
console.log("fruits after delete", fruits);

// concat => este bun de folosit pentru concatinarea a 2 listei fara sa le modifice
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myGirls, myBoys, myChildren);

// splice => sterge elemenetele de la un anumit index (si poate sa adauge altele)
// primult parametru inseamna idnexul de la care se va face stergerea (sau inserarea)
// al doilea parametru inseamna numarul de elemente care vor fi sterse (0 pentru a nu sterge nimic)
// urmatorii parametri sunt elemente noi care vor fi adaugate la indexul din primul parametru
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// const fruits3 = fruits2;
const fruits3 = [...fruits2];
fruits3.splice(2, 0, "Lemon", "Kiwi");
console.log("fruits2 = " + fruits2);
console.log("fruits3 = " + fruits3);


// slice => creeaza o lista noua (sters o parte, de a index i- primul parametru) din prima lista
const fructe1 = ["Banana", "Orange", "Apple", "Mango"];
const fructe2 = fructe1.slice(2);
// const fructe2 = [...fructe1];
console.log("fructe1 = " + fructe1);
console.log("fructe2 = " + fructe2);


// indexOf("Denisa") -returneaza indexul elementului

// lastIndexOf - la fel ca indexOf doar ca daca elementul apare de mai multe ori il returneaza pe ultimul

console.log(fructe1.includes("Orange"));
console.log(fructe2.includes("Orange"), fructe2);

