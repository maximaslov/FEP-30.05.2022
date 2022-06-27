// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// increment(1);
// decrement(5);

// function increment(i) {
//     if (i > 5) {
//         return;
//     }

//     console.log(i); 

//     increment(i + 1);
// }

// function decrement(i) {
//     if (i === 0) {
//         return;
//     }

//     console.log(i); 

//     decrement(i - 1);
// }



// console.log(sum(3)); // 3 -> 3 + 2 + 1


// function sum(num) {
//     if (num === 1) {
//         return 1;
//     }
    
//    return num + sum(num - 1);
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(sum(numbers));

// function sum(arr) {
//     return arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1))
// }

// 1 + 2 + 3
// 1 + sum([2, 3, 4, 5])
// 1 + 2 + sum([3, 4, 5])
// ...
// 1 + 2 + 3 + 4 + 5 + sum([])


const person = {
    name: 'Tom',
    age: 42,
    address: {
        country: 'UA',
        phone: {
            mobile: '56789',
            home: '88888',
        }
    },
};

// const personCopy = copy(person);
const personCopy = person;

console.log(person.address === personCopy.address);

function copy(obj) {
    const res = {};

    for (let propName in obj) {
        const val = obj[propName];

        if (typeof val === 'object') {
            res[propName] = copy(val);
        } else {
            res[propName] = val;
        }
    }

    return res;
}