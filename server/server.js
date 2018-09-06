// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
//
// var app = express();
//
//
// app.use(express.static(__dirname + './public'));
//
//
// app.get('/events', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });
//
// app.listen(3000, function() {
//   console.log('listening on port 3000!');
// });
//
var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1'
var port = '3000'

const server = http.createServer((req,res) =>{
  if (req.method == 'GET' && req.url == '/')
  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  }
  else if(req.method == 'GET' && req.url == index.css)
  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream('./public/index.css').pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
});
