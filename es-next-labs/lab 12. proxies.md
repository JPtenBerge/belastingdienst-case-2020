## Lab 12 - Proxies

1. Given the following target structure:  

	```javascript
	const target = {
		name: 'John',
		surname: 'Doe',
		address: 'One Way Street 1',
		age: 40
	}
	```

	create a Proxy object enforcing the following validation rules:  
	* The name and surname properties should always be of type string, with a maximum length of 50 characters.
	* When setting a value longer than 50 characters, truncate it to the first 50 letters.
	* The age property should always be of type number, with a value between 0 and 200.
	* When setting an out of range value, silently fail.
