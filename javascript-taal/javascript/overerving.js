

// bestaande native objecten gaat uitbreiden

// Internet Explorer 11


Date.prototype.getFatsoenlijkeDate = function() {
	return nu.getDate() + '-' + (nu.getMonth() + 1) + '-' + nu.getFullYear();
};

// extension methods

// .includes()
// .startsWith()
// .padStart() // left-pad

// Array String Function Object window
var nu = new Date();
console.log(nu.getFatsoenlijkeDate());


// functionele manier van overerveeveirrring

function LivingBeing() {
	this.spreek = function() {
		console.log('zucht', this.name);
	};
}

function Mammal() {
	this.spreek = function() {
		console.log('zucht met ruggegraat', this.name);
	};
}


function Human(name) { // constructors
	this.name = name;
}


Human.prototype = new Mammal();
Mammal.prototype = new LivingBeing();

var jp = new Human('JP');
jp.spreek();

