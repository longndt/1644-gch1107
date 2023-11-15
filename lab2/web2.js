const http = require('http')
const fs = require('fs')         //file system
const port = 3000
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile('index.html', (err, data) => {
         if (!err) {
            res.write(data)
            res.end()
         }
      })
   }
   else if (req.url === '/hello') {
      fs.readFile('hello.html', (err, data) => {
         if (!err) {
            res.write(data)
            res.end()
         }
      })
   } else if (req.url === '/greenwich') {
      fs.readFile('greenwich.html', (err, data) => {
         if (!err) {
            res.write(data)
            res.end()
         }
      })
   } else {
      res.write('<h1>404 - Page not found !</h1>')
      res.end()
   }
})
server.listen(port, () => {
   console.log('Server is running at http://localhost:' + port);
})