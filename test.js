
const fs = require('fs')

fs.readFile('./text.txt', 'utf8', (error, data) => {
   fs.writeFile('./text2.txt', data, (error) => {
       console.log('error', error)
   })
})