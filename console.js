const http = require('http');


const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})
const port = 8080
const hostname = '127.0.0.1' 
server.listen(port, hostname, () => {
    console.log('My server is listening at http://${hostname}:${port}')
})