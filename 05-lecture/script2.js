const pets = ['cat', 'dog', 'elephant', 'bat', 'rat'];
const elements = ['Fire', 'Air', 'Water'];
const names = ["Bob", "Sally", "Amy"]
const numbers = [50, 7, 400];
let users = [
    { name: 'Sara', age: 42 },
    { name: 'Bob', age: 38 },
    { name: 'Amy', age: 75 },
    { name: 'Bob', age: 89 },
];

// console.log(pets.includes('dog')); // true
// console.log(pets.indexOf('asdasdf')); // 0
// console.log(pets.join(' ; '));
// console.log(pets.concat(elements));
// delete pets[1]; // ['cat', undefined, 'cat', 'bat', 'cat']
// pets.splice(0, 1);

// console.log(pets.reverse());
// const bob = users.find(user => user.name === 'Bob');
// users = users.filter(user => user.name !== 'Amy');
// users.forEach(user => {
//     user.name = user.name.toLowerCase();
// });
// users = users.map(user => {
//     user.name = user.name.toLowerCase();
// });

const sum = users.reduce((acc, user) => {
    const nextNumberSum = acc + user.age;

    return nextNumberSum;
}, 0);

console.log(sum / users.length);
