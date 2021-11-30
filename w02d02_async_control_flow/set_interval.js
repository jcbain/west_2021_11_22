// setInterval

let iteration = 0;
const interval = setInterval(() => {
  iteration++;

  console.log(iteration)

  if(iteration === 10) {
    clearInterval(interval)
  }

}, 500);


console.log("hello")



// setTimeout(() => {

//   console.log('when will i run?')
// }, 600)




