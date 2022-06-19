const path = require('path')
const os = require('os')
const { add, sub, multiply, divide } = require('./math')

console.log(__dirname);

console.log(os.type());
console.log(os.version());

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(add(2,3));
console.log(sub(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
