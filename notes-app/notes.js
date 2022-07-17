const fs = require('fs')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
  const notes = loadNotes()

  const repeatName = notes.filter(note => note.title === title)

  if(repeatName.length === 0){
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

module.exports = {getNotes, addNote, removeNote, listNotes}


