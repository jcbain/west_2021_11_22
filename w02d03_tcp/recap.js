const fs = require('fs');

const splitStringIntoArray = (text) => {
  const textArray = text.split(" ");
  return textArray;
};

fs.readFile('./index.html', {encoding: 'utf8'}, (err, data) => {
  if(err) {
    return console.log(err);
  }
  const textArray = splitStringIntoArray(data);
  console.log(textArray);
})


console.log(splitStringIntoArray("this is just some string"));