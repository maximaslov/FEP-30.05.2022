// function first() {
//     second();
// }

// function second() {
//     third()
// }

// function third() {
//     console.log('Third function');
// }

// first();


function first() {
    console.log('before setTimeout');
    setTimeout(second, 3000);
    setTimeout(second, 2000);
    setTimeout(second, 1000);
    console.log('after setTimeout');
}

function second() {
    console.log('Second function');
}

first();