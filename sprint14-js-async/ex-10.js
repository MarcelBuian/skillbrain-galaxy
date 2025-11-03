
// Cum cream o promisiune noua?
// Orice promisiune creata, are o singura functie (de tip callback), cu doi parametri de tip functie
const promise1 = new Promise((resolve, reject) => {
  // simulăm o operație asincronă (ex: citire din fișier, cerere HTTP etc.)
  setTimeout(() => {
    const succes = true;
    if (succes) {
      resolve([1,2,3,4]);
    } else {
      reject("A apărut o eroare ❌");
    }
  }, 3000);
});

// Aceasta este o promisiune deja rezolvata
const promise2 = Promise.resolve([3,4,5,6]);

console.log(promise1);
console.log(promise2);

// await transforma promisiunea din asincron in sincron
await promise1
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    // Finally este optional
    .finally(() => console.log("Am intrat in finally la promise1"))
;

promise2
    .then((result) => console.log(result))
    .finally(() => console.log("Am intrat in finally la promise2"))
;

console.log("Sfarsit de program");