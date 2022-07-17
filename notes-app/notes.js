const fs = require('fs')

const addNote = (title, body) => {
  const notes = loadNotes()

  const repeatName = notes.find(note => note.title === title)

  if(!repeatName){
    notes.push({
      title: title,
      body: body
    })
  
    saveNotes(notes)
  } else {
    console.log('note title taken');
  }
}

const removeNote = (title) => {
  const notes = loadNotes()

  const filteredNotes = notes.filter(note => note.title !== title)

  if(notes.length){
    saveNotes(filteredNotes)
    console.log('note removed');
  } else {
    console.log('empty notes');
  }
}

const listNotes = () => {
  const notes = loadNotes()

  notes.map(note => console.log(note.title))
}

const readNote = title => {
  try {
    const notes = loadNotes()
    const correctNote = notes.find(note => note.title === title)

    console.log('title', correctNote.title, 'body', correctNote.body );
    
  } catch (error) {
    console.log('no such note exists');
  }
}

const loadNotes = () => {
  try {
    const jsonBuffer = fs.readFileSync('notes.json')
    const jsonData = jsonBuffer.toString()
    return JSON.parse(jsonData)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    return fs.writeFileSync('notes.json', notesJSON)
}

module.exports = { addNote, removeNote, listNotes, readNote }


