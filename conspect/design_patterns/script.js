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

/* class TeslaCar {
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

console.log(car3); */

/* class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.alarm = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }
  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }
  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }
  addAlarm(alarm) {
    this.car.alarm = alarm;
    return this;
  }
  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }
  build() {
    return this.car
  }
};

const myCar = new CarBuilder()
  .addAutoPilot(true)
  .addParktronic(true)
  .updateEngine('V8')
  .build();
console.log('myCar: ', myCar);

const myNewCar = new CarBuilder()
  .addAlarm(true)
  .updateEngine('V6')
  .build();
console.log('myNewCar: ', myNewCar); */

