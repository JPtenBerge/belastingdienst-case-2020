// geen best practice meer

// function test() {

// }
// function test() {

// }

// namespace pattern

// function statement
function test() {

}
// function expression
var test = function() {

};

// operator

// een van de beste dingen die we hadden voor een hele lange tijd

// "transpilers"

// namespace pattern

!function (namespace) {
	console.log('namespace function', arguments);
	var x = 18; // private var

	function getWidth() { return 8; } // private functions
	function getHeight() { return 12; } // private functions

	namespace.getSize = function() { // public
		return getWidth() * getHeight();
	};
}(
	(
		window.com = window.com || {},
		com.infoSupport = com.infoSupport || {},
		com.infoSupport.graphics = com.infoSupport.graphics || {}
	)
);





// var com = {
// 	infoSupport: {
// 		graphics: {
// 			getSize: function() {
// 				console.log('werkt!');
// 			}
// 		}
// 	}
// };

console.log(com);	

console.log(com.infoSupport.graphics.getSize());


// revealing module pattern

var library = (function() {
	function getWidth() { return 3; } // private functions
	function getHeight() { return 11; } // private functions

	return {
		getSize: function() {
			return getWidth() * getHeight();
		}
	}
})();
console.log(library.getSize());
console.log(com.infoSupport.graphics.getSize());


// IIFE: Immediately Invoked Function Expression
!function() {

}();


















