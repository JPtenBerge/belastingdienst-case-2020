## Lab 8 - Maps

From your server you receive the following array:

```javascript
[
	{
		email: 'user1@gmail.com', 
		name: 'User1',
		address: 'Street 1'
	},
	{
		email: 'user2@hotmail.com', 
		name: 'User2',
		address: 'Street 2'
	},
	{
		email: 'user3@yahoo.com', 
		name: 'User3',
		address: 'Street 3'
	},
	{
		email: 'user4@outlook.com', 
		name: 'User4',
		address: 'Street 4'
	}
]
```
	
1. You want to be able to find a user via email and in order to do that you decide to use a ```Map```.
	* Initialize a ```users``` variable with the result of an immediately invoked arrow function expression that creates a new Map. Fill the Map with the array items and use the email property as key.
	* Log the Map entries to the console:
		* Use a for-of loop to loop through the Map entries
		* Use Array destructuring to retrieve the key and the value
		* Use string literals to concatenate the key and the value

2. You want to customize the output string used by the string literal of a user object. In order to do this you decide to fill the map with objects that override the ```Symbol.toPrimitive(hint)``` method instead of the original array items.
	* Create a function ```createUser()``` accepting an object with three properties: ```email```, ```name```, ```address```.
	* Return a new object, using:
		* the property initalizer shorthand for the three properties
		* the concise method syntax to override the ```Symbol.toPrimitive``` method
	* Modify the immediately invoked arrow function expression you defined in the previous exercise by filling the Map with the results of the invocation of the ```createUser()``` method.
	* Log to the console the value of the Map entry associated with the ```user2@homail.com``` key.