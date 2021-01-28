// // wrapper om async proces
// let prom = new Promise((resolve, reject) => {
//     console.log('timeout starten');

//     setTimeout(() => {
//         console.log('klaar');

//         resolve(42);
//         // reject({ message: 'Kaput' });
//     }, 2000);

// });
// prom
//     .then(result => console.log('result:', result))
//     .catch(err => console.error('Oh nee, dat ging mis', err));

// // IIAFE
// (async () => {
//     let result = await prom;
//     console.log(result);
// })();

// jQuery .then()
// Angular // Observables (async++)

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000);
});
let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 4000);
});
let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 2000);
});

Promise.all([prom1, prom2, prom3]).then(results => console.log('results:', results));
Promise.race([prom1, prom2, prom3]).then(result => console.log('result:', result));
