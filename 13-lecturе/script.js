// Object.prototype = {

// };

// const vehicle = {
//     __proto__: Object.prototype,
//     color: null,

//     setColor: function(color) {
//         this.color = color;
//     }
// };

// const car = {
//     __proto__: vehicle, // [[Prototype]]: vehicle
//     isLightOn: false,
// }

// car.setColor('red');

// console.log(car.color); // red


// function Car() {
//     this.isLightOn = false;

//     this.signal = function() {
//         console.log('Signal');
//     }
// }



// function Car(isLightOn) {
//     // 1. this = {};

//     // 2. adding propertis
//     this.isLightOn = isLightOn;

//     // 3. this.[[Prototype]] = { constructor: Car };

//     // 4. return this;
// }

// Car.prototype.signal = function() {
//     console.log('Signal');
// }

// Car.prototype = {
//     constructor: Car,
//     signal() {
//         console.log('Signal');
//     }
// };

// const car = new Car(true);
// const car2 = new Car(false);

// console.log(car, car2);



// Полифилл
// String.prototype.ucFirst = function() {
//     return this[0].toUpperCase() + this.slice(0);
// }


// const obj = {
//     toggleLight: function(color) {
//         this.isLightOn != this.isLightOn;
//     }
// };

// const car3 = {
//     __proto__: obj, // [[Prototype]]: vehicle
//     isLightOn: false,
// }

// const car4 = {
//     __proto__: obj, // [[Prototype]]: vehicle
//     isLightOn: false,
// }

// 1. свойства кладем в функцию конструктор
// 2. методы кладем в прототип


// function Vehicle() {
//     this.setColor = function(color) {
//         this.color = color;
//     }
// }

// function Car(isLightOn) {
//     this.isLightOn = isLightOn;
// }

// Car.prototype = new Vehicle();

// const car = new Car();

// car.setColor('red');

// console.log(car.color); // red





// Методы чтоб подменить контекст
// .call(), .apply(), .bind()

// 'use strict'

// const car = {
//     color: 'red',
// }

// function setColor(color) {
//     this.color = color;
// }

// setColor.call(car, 'blue', 'sdfsdf');
// setColor.call(car, ['blue', 'qweqwe']);

// const setColorBinded = setColor.bind(car);

// setColorBinded('green');






// Статические свойства и методы принадлежат ФК

// function Article(format) {
//     this.format = format;

//     this.publish = function(params) {
//         console.log(`${this.format.color}`);
//     }
// }

// Article.compare = function name(article1, article2, article3) {
    
// }

// Article.FORMA_1 = {
//     text: 'bold',
//     color: 'red'
// };

// Article.FORMA_2 = {
//     text: 'bold',
//     color: 'green'
// };

// const article = new Article(Article.FORMA_1);




// Полиморфизм в JS

// const animal = {
//     voice() {
//         console.log('Hello!');
//     },
//     jump() {
//         console.log('Jumping!');
//     }
// }


// const dog = {
//     __proto__: animal,
//     voice() {
//         console.log('Say like dog!');
//     }
// }

// const duck = {
//     __proto__: animal,
//     voice() {
//         console.log('Say like duck!');
//     }
// }



