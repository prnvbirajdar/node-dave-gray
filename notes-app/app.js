const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const {getNotes, addNote, removeNote, listNotes} = require('./notes')
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
  handler: (argv) => addNote(argv.title, argv.body)
})


// add command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler: (argv) => console.log(removeNote(argv.title))
})

// list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: () => console.log(listNotes())
})


// read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => console.log('read')
})

yargs.parse()

