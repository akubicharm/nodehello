const http = require('http');
const os = require('os');

const server = http.createServer((request, response) => {
    var s = JSON.stringify(os.networkInterfaces(), null, 4);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>hello azure arc</h1>");
    response.end("<pre>" + s + "</pre>");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
