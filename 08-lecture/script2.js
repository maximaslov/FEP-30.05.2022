// Область Видимости === Scope === Лексическое Окружение (ЛО)


// function createCounter() {
//     let num = 0;

//     return function (params) {
//         return ++num;
//     };
// }

// const counter = createCounter();
// const counter2 = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(counter2());


// function createLogger(name) {
//     return function(message) {
//         console.log(`[${name}] ${message}`);
//     }
// }

// const userLoggerFn = createLogger('userLogger');
// userLoggerFn('user was created');


// const name = 'userLogger';

// function log(message) {
//     console.log(`[${name}] ${message}`);
// }

// log('user was created')


// function createLogger(name) {
//     function log(message) {
//         console.log(`[${name}] ${message}`);
//     }
//     function warn(message) {
//         console.log(`[${name}] ${message}`);
//     }
    
//     return {
//         log,
//         warn,
//     };
// }

// const userLoggerFn = createLogger('userLogger');
// userLoggerFn.log('user was created');
// userLoggerFn.warn('user was created');



// function createLogger(name) {
//     function format(name, message) {
//         return `[${name}] ${message}`;
//     }

//     return {
//         log: message => console.log(format(name, message)),
//         warn: message => console.log(format(name, message)),
//     };
// }

// const userLoggerFn = createLogger('userLogger');
// userLoggerFn.log('user was created');
// userLoggerFn.warn('user was created');



// function num(base) {
//     const originBase = base;

//     return {
//         inc: () => {
//             ++base;
//         },
//         dec: () => {
//             --base
//         },
//         get: () => base,
//         reset: () => {
//             base = originBase
//         },
//     };
// }

// const baseAdd10 = num(10);
// const baseAdd100 = num(100);
// const baseAdd1000 = num(1000);



// Написать функцию калькулятор которая умеет
// прибавлять, вычитать, устанавливать новое
// базовое знаячение и возвращать значение.
// Если вместо числа передается что-то другое то игнорируем
// его и текущее значение калькулятора не меняем

function createCalculator() {
  // implement
}

const calculator = createCalculator(100);

calculator.add(10); // 110
calculator.add(10); // 120
calculator.sub(20); // 100

calculator.set(20); // 20
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get()) // 40