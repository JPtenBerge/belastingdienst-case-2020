## Lab 7 - Symbols

With the help of the ```Symbol.toPrimitive``` property (used as a function value), an object can be converted to a primitive value. The function is called with a string argument hint, which specifies the preferred type of the result primitive value. The hint argument can be one of ```number```, ```string``` and ```default```.

1. Create an empty object ```obj1```.  
	* Convert ```obj1``` to a number using the unary plus(+) operator. Log the result to the console.
	* Log to the console the value of ```obj1``` using a string literal.
	* Compare obj1 with 0 using the ```==``` operator. Log the result to the console.

1. Create an object ```obj2```.
	* Override the Symbol.toPrimitive function to return:  
		10 if the hint is 'number'  
		'hello' if the hint is 'string'  
		true otherwise
	* Repeat the code from the exercise 1, now using obj2.

WARNING: do not transpile the script using Babel, since it does not support Symbol.toPrimitive.
