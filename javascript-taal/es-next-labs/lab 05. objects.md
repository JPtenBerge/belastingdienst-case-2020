## Lab 5 - Objects
1. Write a ```CreateCustomer``` function that accepts the following parameters:
```id```, ```name```, ```city```. The functions should return an object that has the following properties: ```id```, ```name```, ```city```, ```nrOfUnpaidBills```
and the methods: ```buyStuff()```, ```payBill()```.  

	* When a Customer is created the ```nrOfUnpaidBills``` equals 0.
	* Each time ```buyStuff()``` is called ```nrOfUnpaidBills``` is increased by 1.
	* Each time ```payBill()``` is called ```nrOfUnpaidBills``` is decreased by 1.

1. Add a method ```badPayer(int n)``` that returns true if ```nrOfUnpaidBills``` is n or more. Otherwise it should return false.

1. Override the ```toString()``` method for Customer objects. It should return ```id```, ```name``` and ```city```, formatted like: "(id) name - city".

