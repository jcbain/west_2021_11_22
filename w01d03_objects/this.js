// this 


const bigfoot = {
  name: 'lisa',
  numToes: 10, 
  isTall: true,
  relatives: [ 'yeti', 'gigantopithecus', 'chewbacca'],
  sayMyName: function() {
    // console.log("what is this?: ", this.relatives)
    console.log(`hello, my name is ${this.name}`)
  }

};

bigfoot.sayMyName()