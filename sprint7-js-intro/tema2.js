/*
Temă obligatorie pentru acasă:

{first_name} rezolvă exercițiile într-un mediu de programare la alegere (ex. Replit, VS Code) și încarcă codul pe Replit.

Returnează un boolean dacă un număr este divizibil cu 10

Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

Exemplu 1:
Input: 100

Output: true

Exemplu 2:

Input: 23

Output: false

Scrieți o funcție numită tellFortune care:

primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

Exemplu 1:

Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”

Output: “Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii.”

Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

Exemplu 1:

Input: 1

Output: “Luni”

Exemplu 2:

Input: 5

Output: “Vineri”

Deschide un PR(pull request) cu soluția ta, încarcă link-ul folosind Text reply.
*/


function tellFortune1(n, z, y, x) {
    return "Vei fi un " + x +" în " + y + ", căsătorit cu " + z + " și vei avea "+ n +" copii.";
}

const tellFortune2 = (n, z, y, x) => `Vei fi un ${x} în ${y}, căsătorit cu ${z} și vei avea ${n} copii.`;

console.log(tellFortune1(3, "Emanuel", "Italia", "Programator"));

const text2 = tellFortune1(5, "Marcel", "Malta", "Inginer");
console.log(text2);

const text3 = tellFortune2(3, "Emanuel", "Italia", "Programator");
console.log(text3);

let nrCopii = 5;
let nume = "Marcel";
let locatie = "Malta";
let ocupatie = "Inginer";

const text4 = tellFortune2(nrCopii, nume, locatie, ocupatie);
console.log(text4);

nrCopii = 2;
nume = "Tiberiu";
locatie = "Germania";
ocupatie = "Antreprenor";
const text5 = tellFortune2(nrCopii, nume, locatie, ocupatie);
console.log(text5);

