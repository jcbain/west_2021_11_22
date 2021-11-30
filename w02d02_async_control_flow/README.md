# W02D02 - Ansynchronous Control Flow

## Objectives
- [X] Recap callbacks
- [X] Blocking code
- [X] Asynchronous programming
- [X] `setTimeout` and `setInterval`
- [X] File system functions `fs`

### Recap callbacks
A callback is a function passed to another function to be called within that function.

```js
// higher order function takes in callback
const myForEach = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    callback(elem, i)
  }
}

const chickens = ['poulet', 'chicken', 'pollo'];

// output each value and index of chickens
myForEach(chickens, (val, ind) => console.log(val, ind));

```

### Asynchronous Programming
- JavaScript is synchronous; executing one line of code after the previous one has completed
- Asynchronous programming allows us to start a long running process, execute other code, and then perform some operation once the running long process has completed
- We generally use async programming when using API's outside of our application (eg. interacting with a database, making a web request, retrieving the user's geolocation coordinates)
- Note: Using a callback does not necessarily mean asynchronous code. Think of a forEach or a map. That code is executed synchronously while using a callback.


### Blocking code
Code that takes a long time to execute and **blocks** other code from executing

### setTimeout
`setTimeout` is an asynchronous function that allows us to execute a callback after a specified amount of time.

```js
setTimeout(() => {
  console.log("I'll run after at least 1 second")
}, 1000)
```

Synchronous code will always run first

```js
console.log('I will run first');
setTimeout(() => {
  console.log("I will run third");
})
console.log('I will run second');

```

`setInterval` is similar to `setTimeout`, but continues to run the callback on an interval rather than being executed only once. Like `setTimeout`, `setInterval` returns a value to us so that we can later make reference to the interval (eg. in order to cancel it).

```js
let iteration = 0;
// create a handle
const interval = setInterval(() => {
  iteration++
  console.log(iteration)

  // once iteration gets to 10 we clear the interval using the handle
  if(iteration === 10) {
    clearInterval(interval)
  }

}, 1000)
```

### File system functions

Node has a build-in module that allows us to interact with our file system. We can import in this `fs` module like any other node module and this module gives us both a synchronous and asynchronous way of reading in a file.

```js
const fs = require('fs');

// sync
const data = fs.readFileSync('./index.html', {encoding: 'utf-8'})
console.log(data)

// async
fs.readFile('./index.html',{encoding: 'utf-8'}, (err, data) => {
  if(err) {
    return console.log(err);
  }

  console.log(data.length)
})
```

### Read more
- [Node Block vs Non-blocking code](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
- [MDN asynchronous concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Node fs](https://nodejs.org/api/fs.html)
