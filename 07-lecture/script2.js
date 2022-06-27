'use strict'

// Области видимости отвечает за доступность переменных.

// Виды Областей Видимости:
// - глобальная
// - функция
// - блок кода (выражение if, циклы for и др., везде где можно поставить фигурные скобки кроме скобок означающих создание объекта)
// - модуль

// Hoisting - это процесс присвоения переменным объявленным через var дефолтного значения 
// undefined, а функции декларации сохраняются в память HIP 
// на стадии компиляции.

// let name = 'Tom';

// if (true) {
//     var x = 42;
// }

// console.log(x);

// var i;

// for (i = 0; i < 10; i++) {
//     // console.log(a)
// }

// console.log(i);

// function fn() {
//     const name = 'Jerry';

//     console.log(name);
// }

// fn();

// console.log('XXX', students);
// console.log(averageStudentMark(11));
// console.log(averageGroupMark(students));

// (() => {
//     let y = (x = 10);
// })(); // IIF

// console.log(typeof x); // 10
// console.log(typeof y); // undefined



// sayHi();

// function sayHi() {
//     console.log('XXX');
// }


// console.log(y);
// console.log(m);

// var y; // undefined
// let m;

// y = 10;

// console.log(y); // 10


// function sayHi() {
//     r = 42;
//     return r;
//     var r;
// }

// console.log( sayHi() );


const arr = [5,6,7,8];

const res = arr.reduce((acc, current, i) => {
    console.log(i, acc, current);

    if (i === 3) {
        return 'XXX'
    }

    return acc + current
}, 0);

console.log(res); // 26