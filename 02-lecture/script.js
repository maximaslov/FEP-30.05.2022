// const num = prompt('Enter number');

// if

// const isValidNumber = !isNaN(num);

// if (isValidNumber) {
//     console.log(Number(num) + 1);
// } else {
//     console.log('Invalid number');
// }

// ? :
// const message = isValidNumber ? Number(num) + 1 : 'Invalid number';

// console.log(message);

// if else

// if (isNaN(num)) {
//     console.log('Error input');
// } else {
//     console.log(Number(num) + 1);
// }


// + - / * % ** && ||

// && ||

// 

// if (num == 10 && num == 20) {
//     console.log('Number 10 or 20');
// } else if (num == 30) {
//     console.log('Number 30');
// } else {
//     console.log('Error number');
// }

// switch(Number(num)) {
//     case 10:
//     case 20:
//         console.log('Number 10 or 20');
//         break;
//     case 30:
//         console.log('Number 30');
//         break;
//     default:
//         console.log('Error number');
// }







console.log(typeof add);
console.log(add(2, 4));
console.log(add(5, 6));


const a = add(2, 4);
const b = sub(8, 1);

showResult(add(2, 4), sub(8, 1));





// Declaration

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Error arguments value';
    }

    return a + b;
}

function sub(a, b) {
    return a - b;
}

function showResult(a, b) {
    console.log(`a = ${a}, b = ${b}`);
}

// Expression

// const add = function(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Error arguments value';
//     }

//     return a + b;
// }
   