const http = require('http')
const fs = require('fs')         //file system
const port = 3000
const server = http.createServer((req, res) => {
   fs.readFile('hello.html', (err, data) => {
      //case 1 (error) : system can not read html file
      if (err)
         console.error(err)
      //case 2 (success) : system can read html file
      else {
         res.write(data)
         res.end()
      }
   })
})
server.listen(port, () => {
   console.log('Server is running at http://localhost:' + port);
})