// Functii
// 1 tip (clasic):
// numele functiei e bine sa fie snake_case sau camelCase (adnumaDouaNumere)

const b = 3;

// Functie care returneaza ceva
function aduna_doua_numere(a, b) {
    console.log("aduna_doua_numere, b= "+b);
    return a + b;
    // instructiune;
    // o alta instructie;
}

const a = aduna_doua_numere(1, 1);
console.log("a = ", a);

const c = aduna_doua_numere(4, 2);
console.log("c = ", c);

const d = aduna_doua_numere(c, 5 + 1);
console.log("d = ", d);

console.log(aduna_doua_numere(120, 100));

// Avem functii care nu returneaza nimic;
function adauga_un_rand_nou() {
    console.log();
}

adauga_un_rand_nou();
adauga_un_rand_nou();
console.log("End");
