const http = require('http');
const os = require('os');

const server = http.createServer((request, response) => {
    var s = JSON.stringify(os.networkInterfaces(), null, 4);
    var template =
    "<body style='background:url(https://azurecomcdn.azureedge.net/cvt-7a762ab48c8d4c8318b59415e9c7995bdb25d6f53e87295f8f08fe57d8820b72/images/page/home/accelerate.png) no-repeat'>" +
    "<div style='float: left;'><h1>Hello Azure Arc</h1></div>" +
    "<div style='float: right;'><pre>" + s + "</pre></div>" +
    "</div>" +
    "</body>";
    

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(template);
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
