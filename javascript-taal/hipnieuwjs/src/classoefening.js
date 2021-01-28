class Phone {
  brand;
  type;
  appDrawer;

  constructor(brand, type) {
    this.brand = brand;
    this.type = type;
    this.appDrawer = new AppDrawer();
    this.appDrawer.addApp(new Calculator());
    this.appDrawer.addApp(new AddressBook());
  }
}

class AppDrawer {
  apps = [];

  get calculator() {
    return this.apps.find((x) => x instanceof Calculator);
  }

  get addressBook() {
    return this.apps.find((x) => x instanceof AddressBook);
  }

  addApp(app) {
    if (!(app instanceof App)) {
      throw { message: "App is not an app" };
    }
    this.apps.push(app);
  }
}

class App {
  name;

  constructor(name) {
    if (new.target === App) {
      throw { message: "Thou shallt not instantiate App" };
    }

    this.name = name;
  }

  start() {
    console.log(`========== App ${this.name} is starting ==========`);
  }
}

class Calculator extends App {
  constructor() {
    super("Calculator");
  }

  add(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr);
  }

  subtract(...numbers) {
    return numbers.reduce((prev, curr) => prev - curr);
  }

  multiply(...numbers) {
    return numbers.reduce((prev, curr) => prev * curr);
  }

  divide(...numbers) {
    return numbers.reduce((prev, curr) => prev / curr);
  }
}

class AddressBook extends App {
  contacts = [];

  constructor() {
    super("AddressBook");
  }

  addContact(contact) {
    if (!(contact instanceof Contact)) {
      throw { message: "Thou shallt not add non-contacts" };
    }
    this.contacts.push(contact);
  }

  *where(pred) {
    yield* this.contacts.filter(pred);

    // for (let contact of this.contacts) {
    //   if (pred(contact)) {
    //     yield contact;
    //   }
    // }
  }
}

class Contact {
    name;
    surname;
    phoneNumber;

    constructor(name, surname, phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
}


let jPhone = new Phone();
jPhone.appDrawer.addressBook.addContact(new Contact('De Paus', 'Francis', '31-6586940'));
jPhone.appDrawer.addressBook.addContact(new Contact('Donald', 'Trump', '06-29485859'));
jPhone.appDrawer.addressBook.addContact(new Contact('Jonge Britney', 'Spears', '06-023959633'));
jPhone.appDrawer.addressBook.addContact(new Contact('Gerrie', 'Bosui', '0318-3959633'));

console.log('all contacts:', jPhone.appDrawer.addressBook.contacts);
for(let contact of jPhone.appDrawer.addressBook.where(x => x.phoneNumber.includes('06'))) {
    console.log('contacts met 06:', contact);
}

console.log(jPhone.appDrawer.calculator.multiply(5, 5, 5));
