// for:

// for ({instr de initiere}; {o expresie booleana - conditie de oprire};  {o instructiune de salt})

for (let i = 0; i < 5; i++) {
    console.log("Suntem in for. i este " + i);
}

// Scriem descrescator numere de la 30 la 10;
// for (let i = 30; i >= 10; i = i - 2) {
for (let i = 30; i >= 10; i -= 2) {
    console.log("Suntem in for descrescator. i este " + i);
}