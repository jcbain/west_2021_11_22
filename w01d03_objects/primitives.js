// primitive
// string, numbers, boolean, undefined, null, symbol, bigint

const creature = "bigfoot";
console.log(typeof creature);

const numToes = 10;
console.log(typeof numToes);
console.log(numToes === 10);

// prints out 'object' but indeed still a primitive
const tinderProfile = null;
console.log(typeof null);

const sym = Symbol('crypto')
console.log(sym === Symbol('crypto'))

console.log(Number.MAX_SAFE_INTEGER);
const bigNumber = 9007199254740992n;
console.log(typeof bigNumber);


