let createCustomer = (id, name, city) => {
  let _unpaidBills = new Map();
  let _paidBills = new Map();

  return {
    id,
    name,
    city,
    bills: {
      add(bill) {
        _unpaidBills.set(bill.number, bill);
      },
      pay(billnumber) {
        let bill = _unpaidBills.get(billnumber);
        _unpaidBills.delete(billnumber);
        _paidBills.set(billnumber, bill);
      },
      *unpaid() {
        yield* _unpaidBills.values();

        // for (let item of unpaidBills.values()) {
        //   yield item;
        // }
      },
      *paid() {
        yield* _paidBills.values();
        // for (let item of paidBills) {
        //   yield item[1];
        // }
      },
    },
  };
};

let c1 = createCustomer(1, "Mario", "Roma");
console.log(`${c1.id} - ${c1.name}, ${c1.city}`);

c1.bills.add({ number: "ab123", amount: 123 });
c1.bills.add({ number: "cd456", amount: 456 });
c1.bills.add({ number: "ef789", amount: 789 });
c1.bills.add({ number: "gh012", amount: 128 });
c1.bills.add({ number: "ij386", amount: 946 });

console.log("*********unpaid***********");
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

c1.bills.pay("ef789");
c1.bills.pay("cd456");

console.log("*********unpaid***********");
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

console.log("**********paid************");
for (const b of c1.bills.paid()) {
  console.log(b.number, b.amount);
}
