//1. khai báo host
const host = 'localhost'

//2. khai báo port
const port = 1234   //default port của NodeJS : 3000

//3. khai báo http
const http = require('http')

//4. tạo web server
const server = http.createServer((request, respond) => {
   respond.setHeader('Content-Type','text/html')
   respond.write('<h1>Hello world</h1>')
   respond.write('<h2>This is my first NodeJS page</h2>')
   respond.write('<h3>Greenwich VN - 2 Pham Van Bach - Cau Giay - HN</h3>')
   respond.end()
})

//5. cho server listen port để chạy web
server.listen(port, () => {
   console.log('Server is running at http://' + host + ":" + port)
})
