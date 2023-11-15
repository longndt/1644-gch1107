const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
   res.write('<h1>Hello world</h1>');
   res.end();
})
server.listen(port, () => {
   console.log('Server is running at http://localhost:' + port);
})