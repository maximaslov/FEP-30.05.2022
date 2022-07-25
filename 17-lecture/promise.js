// function loadScript(path, calback) {
//     // Some magic actions
// }

// loadScript('./my/script.js', (script) => {

//     loadScript('./my/script2.js', (script) => {
  
//       loadScript('./my/script3.js', (script) => {
//         // ...и так далее, пока все скрипты не будут загружены
//       });
  
//     })
  
// });

// if (error) {
//     // обрабатываем ошибку
// } else {
//     // скрипт успешно загружен
// }

// loadScript('./my/script.js', (script, error) => {
//     if (error) {
//         // обрабатываем ошибку
//     } else {
//         loadScript('./my/script2.js', (script, error) => {
//             if (error) {
//                 // обрабатываем ошибку
//             } else {
//                 loadScript('./my/script3.js', (script, error) => {
//                     if (error) {
//                         // обрабатываем ошибку
//                     } else {
//                         // скрипт успешно загружен
//                     }
//                 });            
//             }
//         })
//     }
// });


// loadScript('./my/script.js' callbackForStep1);

// function callbackForStep1(script, error) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript('2.js', callbackForStep2);
//     }
// }

// function callbackForStep2(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript('3.js', callbackForStep3);
//     }
// }

// function callbackForStep3(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...и так далее, пока все скрипты не будут загружены (*)
//     }
// };


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(42), 1000);
// });

// console.log(promise);

// promise.then(result => {
//     console.log(`First promise subscriber received: ${result}`);
// });

// promise.then(result => {
//     console.log(`Second promise subscriber received the same result: ${result}`);
// });



// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(Error('Some error happened')), 1000);
// });

// promise
//     .then(result => {
//         console.log(`First promise subscriber received: ${result}`);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })



// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(42), 1000);
// })

// promise
//     .then(result => {
//         console.log(result); // 42

//         return result * 2;
//     })
//     .then(result => {
//         console.log(result); // 84

//         // return ?
//     })
//     .then(result => {
//         console.log(result); // undefined
//     })
//     .then() // promise
//     .then() // promise
//     .then(result => {
//         return 8;
//     })
//     .then(result => {
//         console.log(result); // 8
//     })


// .then() - всегда возвращает проміс.


// promise
//     .then(result => {
//         console.log(result); // 42

//         return result * 2;
//     })
//     .then(result => {
//         console.log(result); // 84

//         // return Promise.reject(Error('error from second promise'));
//         throw new Error('error from second promise');
//     })
//     .then(result => {
//         console.log(result); // undefined
//     })
//     .then() // promise
//     .then() // promise
//     .then(result => {
//         return 8;
//     })
//     .then(result => {
//         console.log(result); // 8
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })


const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(8), 1000);
});

promise
    .then(result => {
        console.log(result); // 8

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve('Result from inner promise'), 1000);
        });
    })
    .then(result => {
        console.log(result); // 'Result from inner promise'
    })




// const promise = loadScript("/article/promise-chaining/one.js");

// promise
//     .then(script => loadScript("/article/promise-chaining/two.js"))
//     .then(script => loadScript("/article/promise-chaining/three.js"))
//     .then(script => {
//         // скрипты загружены, мы можем использовать объявленные в них функции
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });