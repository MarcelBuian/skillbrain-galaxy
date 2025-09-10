// Declaram prenumele intr-o constanta. A carei valoare nu se va mai schimba.
const prenume = "Adriana";
// Declaram numele intr-o variabila. Pentru ca poate sa se modifice ulterior.
let nume = "Dehel";

// Cream o variabila noua nume_complet
let nume_complet = prenume + " " + nume;

// Afisam numele complet din variabila nume_complet.
console.log(nume_complet);

// Am modificat valoarea variabilei "nume"
nume = "Balica";
// De asemenea, am modificar valoarea variabilei nume_complet
nume_complet = prenume + " " + nume;

// Afisam din nou valoarea numelui complet.
console.log(nume_complet);

// Atentie! Sa nu folosim cuvantul `var`, doar `let` si `const`
