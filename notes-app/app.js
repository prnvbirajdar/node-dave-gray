const fs = require('fs')

fs.writeFileSync('notes.txt', 'written text')

fs.appendFileSync('notes.txt', 'data to append', 'utf8')