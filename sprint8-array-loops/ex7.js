// Functii recursive
const returneazaInmultirea = (n, count) => {
    if (count === 1) {
        return n;
    }

    return n + returneazaInmultirea(n, count-1);
}

const a = returneazaInmultirea(4, 3);

console.log(a);

// returneazaInmultirea(4, 3) = 4 + returneazaInmultirea(4, 2) = 12
// returneazaInmultirea(4, 2) = 4 + returneazaInmultirea(4, 1) = 8
// returneazaInmultirea(4, 1) = 4;