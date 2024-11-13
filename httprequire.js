const http = require('http');
const capitalize = require('capitalize');
const server = http.createServer((req, res) => {
    let responseText = 'i am a smaller text!';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(capitalize.words(responseText));
});
//localhost or 127.0.0.1
const port = 5500
const hostname = '127.0.0.1'
server.listen(port, hostname, () => {
    console.log(`My server is listening at http://${hostname}:${port}`);
})