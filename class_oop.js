// 1. Warm-Up
// Observe the 'this' keyword in various scopes as well as the [[Prototype]] property in both objects

const proto = {
  greet() {
    console.log("hi");
  },
};
const a = {};
const b = Object.create(proto);
console.log(a.greet); // undefined or global object
console.log(b.greet); // function from proto


// 2. Factory Functions -> Constructors
// Refactor the following factory function into a constructor.

function animalFactory(species, sound) {
  const animal = {};
  animal.species = species;
  animal.sound = sound;
  animal.makeSound = function() {
    console.log(`${this.species} says ${this.sound}`);
  };
  return animal;
}

const dog = animalFactory("Dog", "Woof");
dog.makeSound();

// refactored constructor
function AnimalBarn(species, sound) {
  this.species = species;
  this.sound = sound;
}

AnimalBarn.prototype.makeSound = function() {
  console.log(`${this.species} says ${this.sound}`);
};

const cat = new AnimalBarn("Cat", "Meow");
cat.makeSound();


// 3. Constructors → ES6 Classes
// Refactor this constructor/prototype pattern into a class.

function CarConstructor(model, year) {
  this.model = model;
  this.year = year;
}
CarConstructor.prototype.start = function() {
  console.log(`The ${this.year} ${this.model} is starting`);
};
CarConstructor.prototype.addMileage = function(num) {
  this.mileage = num;
};
CarConstructor.prototype.drive = function() {
  console.log(`The car has driven ${this.mileage ?? 0} miles`);
};


// 4. Inheritance and super()
// Create a subclass that inherits from Building and adds new functionality.

class Building {
  constructor(name, floors) {
    this.name = name;
    this.floors = floors;
  }
  describe() {
    console.log(`The ${this.name} has ${this.floors} floors.`);
  }
}


// 5. Mixins and Composition
// Use a mixin to add shared functionality to different classes.

const flyMixin = {
  fly() { console.log(`${this.name} is flying!`); },
};

class Drone {
  constructor(name) {
    this.name = name;
  }
}

class Superhero {
  constructor(name) {
    this.name = name;
  }
}
