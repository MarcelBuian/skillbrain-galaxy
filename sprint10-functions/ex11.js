const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 17 },
    { name: 'Mircea', age: 11 },
    { name: 'Matei', age: 16 },
];

const rez = users
    // functia filter se aplica pe o lista (users) iar rezultatul este tot o lista
    .filter((user) => user.age >= 16)
    // functia map se aplica pe o lista (rezultatul de mai sus), iar rezultatul este tot o lista
    .map((user) => `${user.name} is ${user.age} years old`)
    // functia join se aplica pe o lista (rezultatul de mai sus), iar rezultatul este un string!
    .join('\n')
    // .length
;

console.log(rez);