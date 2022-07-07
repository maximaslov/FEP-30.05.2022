// f

// const name = 'John';

// function sayHi(name) {
//     console.log(`Hi ${name}`);
// }
// sayHi(name);

// OOP


// const person = {
//     name: 'John',
//     sayHi: function() {
//         console.log('this: ', this);
//     },
//     sayBy() { // короткая запись метода
//         console.log(`By ${this.name}`);
//     }
// }
// person.sayHi();


// Контекст === this - это всегда объект перед точкой

// Контекст - это объект в рамках которого вызывается функция.

// this - вычисляется во время вызова Ф.

// 'use strict'

// function sayHi() {
//     return this;
// }

// console.log(sayHi()) // Window

// 'use strict'

// const person = {
//     name: 'John',
//     sayHi: function() {
//         console.log('this: ', this);
//     },
// }

// const sayHi = person.sayHi;

// sayHi();


// У СФ нет своего this, он берется из родительской области видимости.

// 'use strict'

// console.log(this); // Window

// this.name = 'Harry';

// const person = {
//   name: "John",
//   sayHi: function() {
//     console.log('Hi ' + this.name)
//   },
//   sayBy: () => {  // <- стрелочная функция!
//     console.log('By ' + this.name)
//   },
// };

// person.sayHi();
// person.sayBy();

