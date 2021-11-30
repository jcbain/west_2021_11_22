
// higher order function
const timeAFunction = (callback) => {

  const start = new Date().getTime();
  callback();
  const end = new Date().getTime();

  console.log(`the function took ${end - start}ms to run`)
}

const sayHello = () => {
  console.log('hello there!')
}

timeAFunction(() => {
  console.log('hello, world')
});