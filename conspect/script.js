/* function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // Суммируем ASCII-код каждого символа строки
    hash += str.charCodeAt(i);
  }
  return hash;
}

const input = "ABC";
const hashValue = simpleHash(input);
console.log(hashValue); // Выведет 198 (65 + 66 + 67)


const myHashTable = new Map();

myHashTable.set('key1', 'value1');
myHashTable.set('key2', 'value2');
myHashTable.set('key3', 'value3');

console.log(myHashTable.get('key2')); // value2


let arr = [1, 2, 3, 4, 5]
for (const i of arr) {
  i += 1
}
 */

// Design Pattenrs
/* function serverToClientAdapter(data) {
  return {
    someData: data.some_data.join(' ')
  }
}

console.log(serverToClientAdapter({ some_data: ['Name', 'Lastname'] })) */

/* function createGuitar(stringsCount = 6) {
  return {
    stringsCount,
    frets: 24,
    fretBoardMaterial: 'кедр',
    boardMaterial: 'клён',
  }
}
console.log(createGuitar(7)); */

// let instance;
/* class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increseCount() {
    return this.count++;
  }
}; */

/* const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increseCount();
myCount1.increseCount();
myCount2.increseCount();
myCount2.increseCount();

myCount2.getCount()
console.log('myCount2.getCount(): ', myCount2.getCount());
myCount1.getCount()
console.log('myCount1.getCount(): ', myCount1.getCount());
console.log(myCount1 === myCount2); */


/* class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}
class BmwFactory {
  create(type) {
    if (type === 'X5') return new Bmw(type, 108000, 300)
    if (type === 'X6') return new Bmw(type, 111000, 320)
  }
}

const factory = new BmwFactory();

const x5 = factory.create('X5')
console.log('x5: ', x5);
const x6 = factory.create('X6')
console.log('x6: ', x6); */

/* // Abstract factory
function bmwProducer(type) {
  return type === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories:
function sportCarFactory() {
  return new Z4();
}
function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return 'Z4 is a Sport car';
  }
}
class I3 {
  info() {
    return 'I3 is a Family car';
  }
}

// Initializing Abstract Factory to produce certain type:
const produce = bmwProducer('sport');

// Car producing factory:
const myCar = new produce();
console.log('myCar: ', myCar.info()); */

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}
// Produce base vehicle:
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Cloning base vehicle:
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Add changes for particular vehicle:
car1.interior = 'white';
car1.autopilot = true;

console.log(car3);
