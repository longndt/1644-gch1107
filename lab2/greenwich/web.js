const http = require ('http')
const fs = require ('fs')
const port = process.env.PORT || 3001  //config port for cloud deployment
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile("home.html", (err, data) => {
         if (err) {
            console.log (err)
         } else {
            res.write(data)
            res.end()
         }
      })
   } else if (req.url === '/hanoi') {
      fs.readFile("hanoi.html", (err, data) => {
         if (err) {
            console.log(err)
         } else {
            res.write(data)
            res.end()
         }
      })
   } else if (req.url === '/danang') {
      fs.readFile("danang.html", (err, data) => {
         if (err) {
            console.log(err)
         } else {
            res.write(data)
            res.end()
         }
      })
   } else if (req.url === '/hcm') {
      fs.readFile("hcm.html", (err, data) => {
         if (err) {
            console.log(err)
         } else {
            res.write(data)
            res.end()
         }
      })
   } else if (req.url === '/cantho') {
      fs.readFile("cantho.html", (err, data) => {
         if (err) {
            console.log(err)
         } else {
            res.write(data)
            res.end()
         }
      })
   } else {
      fs.readFile("notfound.html", (err, data) => {
         if (err) {
            console.log(err)
         } else {
            res.write(data)
            res.end()
         }
      })
   }
})
server.listen(port)