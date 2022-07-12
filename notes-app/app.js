const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes')
const { argv } = require('yargs')

const msg = getNotes()

// add command
yargs.command({
  command: 'add',
  describe: 'add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note title body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => console.log('adding', argv.title + " " + argv.body)
})


// add command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: () => console.log('remove')
})

// list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: () => console.log('list notes')
})


// read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => console.log('read')
})

yargs.parse()

// console.log(process.argv);

// console.log(yargs.argv);
