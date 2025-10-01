const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
];

const newUsers = users.map( (el) => el.name );

console.log(" _users_ = ", users);
console.log("users.mapped = ", newUsers);