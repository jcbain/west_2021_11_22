const fs = require('fs');

// const data = fs.readFileSync('./index.html', {encoding: 'utf-8'});

// console.log(data);

fs.readFile('./index.html', {encoding: 'utf-8'}, (err, data) => {
  if(err) {
    console.log(err);
    return;
  }
  const numChars = data.length;
  console.log(data.split(" "));
})

console.log("when will i run?")