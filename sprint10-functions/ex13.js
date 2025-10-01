// Este folosit in exemplul 1, in loc de map
const myMapExample = (collection, callback) => {
    const result = [];
    for (const item of collection) {
        // Apelarea funcție callback
        const newItem = callback(item);
        // Inserarea valorii în array-ul result
        result.push(newItem);
    }

    return result;
};

const functieRidicaLaPatrat = (number) => number ** 2;


const numbers = [5, 2, 3];

const newNumbers1 = myMapExample(numbers, functieRidicaLaPatrat);
console.log(newNumbers1); 

const newNumbers2 = numbers.map(functieRidicaLaPatrat);
console.log(newNumbers2); 