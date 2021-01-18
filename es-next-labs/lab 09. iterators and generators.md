## Lab 9 - Iterators and Generators

A customer has an ```id```, a ```name```, a ```city``` and a set of bills, divided into two piles: paid ones and the unpaid ones.  
When the customer gets a new bill, the bill goes to the unpaid pile.  
When the customer pays a bill, the bill gets transferred to the unpaid pile.  
Each bill has a unique identifier and an amount to be paid.  

You have to be able to use your application like this:

```javascript
let c1 = createCustomer(1, "Mario", "Roma");
console.log(`${c1.id} - ${c1.name}, ${c1.city}`);

c1.bills.add({ number: 'ab123', amount: 123 });
c1.bills.add({ number: 'cd456', amount: 456 });
c1.bills.add({ number: 'ef789', amount: 789 });
c1.bills.add({ number: 'gh012', amount: 128 });
c1.bills.add({ number: 'ij386', amount: 946 });

console.log('*********unpaid***********');
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

c1.bills.pay('ef789');
c1.bills.pay('cd456');

console.log('*********unpaid***********');
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

console.log('**********paid************');
for (const b of c1.bills.paid()) {
  console.log(b.number, b.amount);
}
```
