const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes')

const msg = getNotes()

console.log(msg);

console.log(chalk.green.bold.bgWhite('success'));

console.log(process.argv);

console.log(yargs.argv);

// add command
yargs.command({
  command: 'add',
  descrube: 'add a note',
  handler: () => console.log('adding')
})


// add command
yargs.command({
  command: 'remove',
  descrube: 'remove a note',
  handler: () => console.log('remove')
})

// list command
yargs.command({
  command: 'list',
  descrube: 'list notes',
  handler: () => console.log('list notes')
})


// read command
yargs.command({
  command: 'read',
  descrube: 'read a note',
  handler: () => console.log('read')
})