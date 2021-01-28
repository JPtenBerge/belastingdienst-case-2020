let myObj = {
  x: 15,
  y: 23,
};
console.log(myObj.x);

let { x, y } = myObj;
console.log("x/y", x, y);

let lijstje = [4, 8, 108];
let [eerste, tweede, derde] = lijstje;
console.log(eerste, tweede, derde);

// splitten
let prop = "obj.prop";
let splits = prop.split(".");
console.log(splits[0] + "." + splits[1]);

let [mainProp, subProp] = prop.split(".");
console.log(mainProp + "." + subProp);

// datums
let datestring = "2012-08-15";
let regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

let [, jaar, maand, dag] = datestring.match(regex);
console.log(`${jaar}-${maand}-${dag}`);

// geavanceerde object
let person = {
    name: 'JP',
    favorieteChips: ['Wokkels Paprika', 'Nibbit'],
    games: {
        puzzle: ['Portal 2', 'Portal'],
        rts: ['Desperados 3']
    }
};

let {
    name: n, // aliassen
    games: alleGames,
    games: {
        puzzle: [ favoChips, ...restvandechips ], // catch-all rest operator
        rts: [ favoGame ]
    }
} = person;
console.log(n, favoChips, favoGame, restvandechips, alleGames);
