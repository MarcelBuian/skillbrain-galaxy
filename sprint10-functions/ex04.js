const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
];
  
function compareCallback (a, b) {
    if (a.age === b.age) {
        return 0;
    }

    return a.age > b.age ? 1 : -1;
};
users.sort(compareCallback);
  
console.log(users);