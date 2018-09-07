var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('../database/index.js')
var app = express();
 app.use(bodyParser.json());
 app.use(express.static(__dirname + '../public'));


 app.post('/', function (req, res) {
 let comments = req.body.comments;
  if(!comments) {
   res.sendStatus(400);
  }else {
   database.insertEvent(comments, function(err, results){
     if(err) {
       res.sendStatus(500);
     }else {
       res.json(results);
     }
   });
  }
})


 app.get('/', function (req, res) {
  database.selectEvent(function(err, results) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});


 app.listen(3000, function() {
 console.log('listening on port 3000!');
});
