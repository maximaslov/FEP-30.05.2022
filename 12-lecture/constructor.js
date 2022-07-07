// const rabbit = {
//     name: 'Bob',
//     color: 'white',
//     maxSpeed: 8,
//     eats: true,
//     sayName() {
//       console.log(`My name is ${this.name}`);
//     },
//     run() {
//       console.log(`I am running with speed ${this.maxSpeed}`);
//     },
//   }
  
//   const rabbit2 = {
//     name: 'Jessika',
//     color: 'brown',
//     maxSpeed: 17,
//     eats: true,
//     sayName() {
//       console.log(`My name is ${this.name}`);
//     },
//     run() {
//       console.log(`I am running with speed ${this.maxSpeed}`);
//     },
//   }
  
//   const rabbit3 = {
//     name: 'Eric',
//     color: 'red',
//     maxSpeed: 37,
//     eats: true,
    // sayName() {
    //   console.log(`My name is ${this.name}`);
    // },
    // run() {
    //   console.log(`I am running with speed ${this.maxSpeed}`);
    // },
//   }

// function Rabbit(name, color, maxSpeed, eats) {
//     this.name = name;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.eats = eats;

//     this.sayName = function() {
//         console.log(`My name is ${this.name}`);
//     };
//     this.run = function() {
//         console.log(`I am running with speed ${this.maxSpeed}`);
//     };
// }

// const rabbit = new Rabbit('Bob', 'white', 8, true);
// const rabbit2 = new Rabbit('Jessika', 'brown', 17, true);
// const rabbit3 = new Rabbit('Eric', 'red', 37, false);

// console.log(rabbit.run());


// function Rabbit(name) {
//     // this = {};  (неявно)

//     // добавляет свойства к this
//     this.name = name;

//     // return this;  (неявно)
// }

// функциональный подход с использованием оластей видимости

// function counter() {
//     let counts = 0;

//     return {
//         inc: () => ++counts,
//     }
// }

// const counter = counter();
// const counter2 = counter();


// OPP

function Counter() {
    this.counts = 0;

    this.inc = function() {
        this.counts += 1
    }
}

const counter3 = new Counter();

// const counter3 = {
//     counts: 0,
//     inc: function() {
//         this.counts += 1
//     }
// }

counter3.inc();
counter3.inc();
counter3.inc();
counter3.inc();

console.log(counter3.counts);