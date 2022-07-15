// class Person {
//     _role = 'guest';

//     constructor(name, role) {
//         this.name = name;

//         if (role) {
//             this.role = role;
//         }
//     }

//     sayHi() {
//         console.log('qweqwerqwer');
//     }

//     ['say' + 'Hi2']() {
//         console.log('qweqwerqwer');
//     }

//     get role() {
//         console.log(`Getter was called`, this._role);
//         return this._role;
//     }

//     set role(value) {
//         console.log(`Setter was called`, this._role);

//         if (typeof value === 'string') {
//             this._role = value;
//         }
//     }
// }

// const john = new Person('John');


// function Person(name) {
//     this.name = name;
//     this.role = 'guest';

//     this.sayHi = function() {
//         console.log('qweqwerqwer');
//     }
// }

// Object.defineProperties(Person.prototype, {
//     name: {
//       get() {
//         return this._name
//       },
//       set(name) {
//         // ...
//       }
//     }
//   });



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




// class Article {
//     static FORMAT = {
//         text: 'bold',
//         color: 'red'
//     };

//     constructor(format) {
//         this.format = format;
//     }

//     publish() {
//         console.log(this.FORMAT);
//     }

//     static publish2() {
//         console.log(Article.FORMAT);
//     }
// }

// const article = new Article();

// article.publish();

// Article.publish2();





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






// class Vehicle {
//     constructor(color) {
//         this.color = color;
//     }

//     setColor(color) {
//         this.color = color;
//     }
// }

// class Car extends Vehicle {
//     constructor(color, isLightOn) {
//         super(color);
//         this.isLightOn = isLightOn;
//     }

//     setColor(color) {
//         super.setColor(color);
//         console.log('Color was set');
//     }
// }

// class Airplane extends Vehicle {}

// const car = new Car('red', true);
// const airplane = new Airplane('green');

// car.setColor('grey');

// console.log(car); // red
// console.log(airplane); // red


class Calculator {
    #base;

    constructor(base) {
        this.#base = base;
    }

    add(num) {
        if(!isNaN(num)) {
            this.#base += num;
        }
    }

    get() {
        return this.#base;
    }
}


const calc = new Calculator(10);
const calc2 = new Calculator(42);

calc.add(10);

// calc.#base = 42;

console.log(calc.get()); // 20 