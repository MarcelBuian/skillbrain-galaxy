/*
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

function getTextOfWeekIndexDay(n) {
    // Facem validare:
    const type = typeof n;
    if (type !== "number") {
        throw "n trebuie sa fie un numar, dar nu " + type;
    }

    if (n < 0) {
        throw "n trebuie sa fie cel putin 0";
    }

    if (n > 7) {
        throw "n trebuie sa fie cel mult 7";
    }

    if (! Number.isInteger(n)) {
        throw "n trebuie sa fie un numar intreg";
    }

    let zi;

    switch (n) {
        case 1: 
            zi = "Luni";
            break;
        case 2:
            zi = "Marti";
            break;
        case 3:
            zi = "Miercuri";
            break;
        case 4:
            zi = "Joi";
            break;
        case 5:
            zi = "Vineri";
            break;
        case 6:
            zi = "Sambata";
            break;
        case 7:
        case 0:
            zi = "Duminica";
            break;
        default: throw "n " + n + " nu este un numar de saptamana valid";
        // default: throw `n ${n} nu este un numar de saptamana valid`;
    }

    return zi;
}



const a = 2;
console.log("a = " + a);
console.log("zi = " + getTextOfWeekIndexDay(a));

const b = 0;
console.log("b = " + b);
console.log("zi = " + getTextOfWeekIndexDay(b));

const c = 4.5;
console.log("c = " + c);
console.log("zi = " + getTextOfWeekIndexDay(c));



// Switch