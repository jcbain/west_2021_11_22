# wk01d03 - Objects

### Objectives
- [X] primitive data types review
- [X] objects!!
- [X] passing primitives and objects to functions
- [X] functions as object methods
- [X] what is `this`
- [X] object iteration with `for...in` loops

### Primitive Types
There are 7 primitive types in Javascript
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Bigint

Primitive types are immutable (cannot be changed after they are created)

```js
const creature = 'bigfoot'; // string
const numToes = 10; // number
const isTall = true; // boolean
let lastSpotted; // undefined
const tinderProfile = null; // null
const type = Symbol('crypto') // symbol
const someHugeNumber = 9007199254740994n; // bigint
```

### Objects
Anything in JavaScript that is not a primitive is in fact an object.

- Data structures that contain related data and functionality.
- Made up of key-value pairs where you can access the value from the key.
- keys are strings/values can be an type (primitive or object).

**note**: *arrays and functions are also objects* 😉

```js
const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};

// to access value either
// 1. square bracket notation
console.log(bigfoot['name']); // > harry

// 2. dot notation
console.log(bigfoot.name); // > harry
```

If the key of the object is known, use dot notation otherwise use bracket notation.

### Passing Values to Functions
When you pass a primitive type to a function, it is passed as a value, which means that a copy is passed and the original value will go unchanged.

```js
const creature = 'bigfoot';

const printDifferentCreature = function(creature){
  creature = 'el chupacabra';
  console.log('creature during function:', creature)
}

console.log(creature) // > bigfoot
console.log(printDifferentCreature(creature)) // > el chupacabra
console.log(creature) // > bigfoot
```

However, passing an object to a function, then a reference to the object is passed and therefore can mutate the object.

```js
const creatureObject = {
  name: 'bigfoot',
  isTall: true 
};

const printDifferentCreatureName = function(obj){
  obj.name = 'el chupacabra';
  console.log('creature name during function:', obj.name);

console.log('creature name before function:', creatureObject.name); // > bigfoot
printDifferentCreatureName(creatureObject); // > el chupacabra
console.log('creature name after function', creatureObject); // > el chupacabra
}

```

### Methods
Functions inside objects are known as methods and can be called much like accessing other values inside objects.

```js
// function expression then assign to an object key
const growl = function() {
  console.log('grrrrrrrr')
}

const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca'],
  growl: growl,
  alludeCamera: function() {
    console.log('byeeeeee')
  }
};

bigfoot.growl(); // > grrrrrrrr
bigfoot.alludeCamera(); // > byeeeeee
```

### this

`this` in JavaScript is a keyword that accesses the given scope's object.

```js

const printBio = function() {
  console.log(`hi, my name is ${this.name} and I ${this.hasLargeFeet ? "have" : "don't have"} large feet`);
}
const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca'],
  printBio: printBio
};

const elChupacabra = {
  name: 'billie',
  location: 'Puerto Rico.',
  hasLargeFeet: false,
  relatives: [],
  printBio: printBio
};

bigfoot.printBio(); // > hi, my name is harry and I have large feet
elChupacabra.printBio() // > hi, my name is billie and I don't have large feet
```

### Looping objects
To iterate through an object's keys, you would use a `for...in` loop.

```js
const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
};

for (const key in bigfoot) {
  // key here is variable so we use bracket notation to
  // access the value
  console.log(key, bigfoot[key])
}

// > name harry
// > location U.S.
// > hasLargeFeet true
```



## Links
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Dot Notation vs Square Brackets](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781)
- [Python Tutor](http://www.pythontutor.com/javascript.html#mode=edit)
- [Symbol Type](https://javascript.info/symbol)
- [The Essential Guide to JavaScript's Newest Data Type: BigInt](https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/)