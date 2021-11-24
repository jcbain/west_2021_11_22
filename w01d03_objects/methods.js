// methods

const growl = function(name) {
  console.log(`grrrrrrr, ${name}`)
  return `grrrrrrr, ${name}`
}

const bigfoot = {
  'name': 'harry',
  numToes: 10, 
  isTall: true,
  relatives: [ 'yeti', 'gigantopithecus', 'chewbacca'],
  // growl: function() {
  //   console.log('grrrrrrr!')
  // }
  growl: growl
  // growl // same thing as above
};

console.log(bigfoot.growls)
bigfoot.growl("Jennifer");

