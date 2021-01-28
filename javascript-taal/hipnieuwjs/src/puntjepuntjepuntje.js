

let lijstje1 = [1,2,3];
let lijstje2 = [4,5,6];

// spread operator

let combineer = [...lijstje1, ...lijstje2];
console.log(combineer);

let obj1 = { x: 14, y: 28 };
let obj2 = { z: 'hoi', x: 'doei' };

let combineerObj = { ...obj2, ...obj1 };
console.log(combineerObj);
