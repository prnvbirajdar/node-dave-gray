const fs = require('fs');

fs.readFile('./files/lorem.txt', 'utf8', (err, data) => {
  if(err) throw err

  console.log(data)
})