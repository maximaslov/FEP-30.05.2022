// const person = ['Tom', 'Smith', 42;
// const name = person[0];
// const lastName = person[1];
// const age = person[2];

// const [,, age] = person;

// const person = {
//     name: 'Tom',
//     lastName: 'Smith',
//     age: 42,
//     adress: {
//         country: 'UA',
//         city: 'Kyiv',
//         phone: {
//             mobile: '56789',
//         },
//     },
//     sayHello: function ({name, age}) {
//         return `Hello ${name}, age ${age}`;
//     },
// };


// function sayHello(person) {
//     console.log(`Hello ${person.name}, age ${person.age}`);
// }

// function sayHello(person) {
//     const {name, age} = person;

//     console.log(`Hello ${name}, age ${age}`);
// }


// function sayHello({name, age}) {
//     return `Hello ${name}, age ${age}`;
// }

// (function sayHello({name, age}) {
//     return `Hello ${name}, age ${age}`;
// })

// const sayHello = ({name, age}) => `Hello ${name}, age ${age}`;

// const sayHello = function({name, age}) {
//     return `Hello ${name}, age ${age}`;
// };

// console.log(sayHello(person));

// const arr = ['qwe', 'qwe2', 'qwe3'];
// let i = 0;

// while(i < arr.length) {
//     console.log(`index: ${i}, value: ${arr[i]}`);
//     i++;
// }

// let i = 0;

// do {
//     console.log(i);
//     i += 1;
// } while (i < 3);



// for(let i = 0; i < arr.length; i++) {
//     console.log(`index: ${i}, value: ${arr[i]}`);
// }

// for (const value of arr) {
//     console.log(value);
// }

// const person = {
//     name: 'Tom',
//     lastName: 'Smith',
//     age: 42,
//     adress: {
//         country: 'UA',
//         city: 'Kyiv',
//         phone: {
//             mobile: '56789',
//         },
//     },
//     sayHello: function ({name, age}) {
//         return `Hello ${name}, age ${age}`;
//     },
// };





// return, break, continue

// function isNumberExists(search, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === search) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(isNumberExists(2, [2, 4 , 6, 12345767]));



// function isNumberExists(search, arr) {
//     const numberEsists = false;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === search) {
//             numberEsists = true;
//             break;
//         }
//     }
//
//     return numberEsists;
// }
//
// console.log(isNumberExists(2, [2, 4 , 6, 12345767]));



// const arr = ['qwe', 'qwe2', 'qwe3'];
//
// for (let i = 0; i < arr.length; i++) {
//     if (i === 1) {
//         continue;
//     }
//
//     console.log(arr[i]);
// }
