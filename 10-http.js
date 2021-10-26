const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page')
    }
    if (req.url === '/about') {
        res.end('Here is the about page')
    }
    res.end(`Whoopsie`);
})

server.listen(3000);