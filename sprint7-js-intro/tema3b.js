
function valideazaNumarIntreg(a) {
    // Facem validare de tip

    const type = typeof a;
    if (type !== "number") {
        throw "numarul trebuie sa fie un numar, dar nu " + type;
    }

    if (! Number.isInteger(a)) {
        throw "numarul (" + a + ") trebuie sa fie un numar intreg!";
    }
}

function valideazaNumarulEsteIntre(n, a, b) {
    if (n < a) {
        throw "numarul " + n + " trebuie sa fie cel putin " + a;
    }

    if (n > b) {
        throw "numarul " + n +  " trebuie sa fie cel mult " + b;
    }
}

function getTextOfWeekIndexDay(n) {
    
    valideazaNumarIntreg(n);
    valideazaNumarulEsteIntre(n, 0, 7);

    switch (n) {
        case 1: 
            return "Luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        case 7:
        case 0:
            return "Duminica";
        default: throw `n ${n} nu este un numar de saptamana valid`;
    }
}

function afiseazaZiuaSaptamaniiPentruIndex(n)
{
    console.log("n = " + n);

    let zi;

    try {
        zi = getTextOfWeekIndexDay(n);
    } catch (e) {
        console.error("Eroare: " + e);
        // Return iese din functie
        return;
    }

    console.log("Ziua saptamanii lui n (" + n + ") este: " + zi);
}

afiseazaZiuaSaptamaniiPentruIndex(2);
afiseazaZiuaSaptamaniiPentruIndex(0);
afiseazaZiuaSaptamaniiPentruIndex(9);
afiseazaZiuaSaptamaniiPentruIndex(1);
afiseazaZiuaSaptamaniiPentruIndex("Ana");
afiseazaZiuaSaptamaniiPentruIndex(7);
