const higherOrderFunction = (callback) => {
  const data = {
    userName: 'Mulder'
  };

  console.log('(1) before set timeout')
  
  setTimeout(() => {
    data.userName = "Scully";
    callback(data);
  },  1000)
  
  console.log('(2) after set timeout')

}


// console.log('(3) before main function call')
higherOrderFunction((data) => {
  data.firstName = "Dana";
  console.log(data)
  // console.log(`hello, ${data.userName}`)
})
// console.log('(5) after main function call')

