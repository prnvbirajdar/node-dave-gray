const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes')

const msg = getNotes()

console.log(msg);

console.log(chalk.green.bold.bgWhite('success'));

console.log(validator.isEmail('asda@gasc.com'));