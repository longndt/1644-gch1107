const http = require('http')
http.createServer((req, res) => {
   res.setHeader('Content-Type', 'application/json')
   res.write('{ "university" : "greenwich", "location" : "hanoi" } ')

   // res.setHeader('Content-Type', 'text/html')
   // res.write('<h1>Greenwich Vietnam</h1>')
   // res.write("<img src='https://greenwich.edu.vn/wp-content/uploads/2022/10/Welcome-1.jpg' width=50% height=50% >")
   res.end()
}).listen(3000, () => {
   console.log('http://localhost:3000')
})