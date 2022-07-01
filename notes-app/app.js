const {name, sum} = require('./new')
const getNotes = require('./notes')

console.log(name);

console.log(sum(1,4));

const msg = getNotes()

console.log(msg);