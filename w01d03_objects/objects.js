// create an object
const bigfoot = {
  'name': 'harry',
  numToes: 10, 
  isTall: true,
  relatives: [ 'yeti', 'gigantopithecus', 'chewbacca']
};


// accessing the values
// dot notation
console.log("dot notation -->", bigfoot.numToes);


// square bracket notation
const key = 'relatives'
console.log("square bracket notation --->", bigfoot[key]);

console.log('what does this return -->', bigfoot.relatives[1]);

// primitives are immutable

// objects are mutable
// bigfoot.newKey = "James";
// bigfoot.relatives.push('pizza oven')
// console.log(bigfoot)


// primitive pass by value
const creature = 'bigfoot';

const printDifferentCreature = function(someCreature) {
  someCreature = 'el chupacabra';
  console.log('creature during function call: ', someCreature)
}

console.log('creature variable before function: ', creature);
printDifferentCreature(creature);
console.log('creature variable after function: ', creature);

// objects pass by reference

const newCreature = {
  name: 'yeti',
  numToes: 10
}

const printDifferentCreatureName = function(creatureObj){
  creatureObj.name = 'el chupacabra';
  console.log('creature name during function:', creatureObj.name);
};

console.log('newCreature before function call: ', newCreature);
printDifferentCreatureName(newCreature);
console.log('newCreature after function call: ', newCreature);