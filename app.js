var http = require('http');
var output = require('./modules/output');


http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(output.message() + output.amount());
  res.end();
}).listen(3000);

console.log('listening on port 3000');
