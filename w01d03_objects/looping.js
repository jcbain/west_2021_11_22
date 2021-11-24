
// looping

const bigfoot = {
  'name': 'harry',
  numToes: 10, 
  isTall: true,
  relatives: [ 'yeti', 'gigantopithecus', 'chewbacca']
};



for(const key in bigfoot) {
  console.log(key);
  console.log("bigfoot[key] ==>", bigfoot[key])

}

// c-stle for loop / for .. of / for.. in 

// const relatives = [ 'yeti', 'gigantopithecus', 'chewbacca'];

// for(const relative in relatives) {
//   console.log(relative)
// }
