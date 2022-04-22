const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('Welcome to my life')
    }
    else if (req.url === '/about') {
        res.end('here is about')
    }
    else {
        res.end('<h1>Oops</h1> <a href="/">back home</a>')
    }

})

server.listen(5000)