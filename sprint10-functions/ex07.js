const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
];
  
// Folosim functie anonima, intr-o singura linie.
// Atentie! Nerecomandat pentru incepatori
users.sort((a, b) => a.age > b.age ? 1 : (a.age < b.age ? -1 : 0));
  
console.log(users);