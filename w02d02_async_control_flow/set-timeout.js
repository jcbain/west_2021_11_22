// // setTimeout

console.log('(1) I will run first')

setTimeout(() => {
  console.log('(2) hello, there!');
}, 0);

const stop = 10000;

for(let i = 0; i < stop; i++) {
  const date = new Date();
  console.log(date);
}

setTimeout(() => {
  console.log('(3) when will I run?')
}, 1000);

console.log('(4) after the setTimeouts');

// setTimeout(() => {
//   console.log('i ran')
//   setTimeout(() => {
//     console.log('i ran too')
//   }, 2000)
// }, 2000)


