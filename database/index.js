var mysql = require('mysql');

var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "holacode",
database: "eventFinders"
});



var insertEvent = function(comments, cb) {
  connection.query("INSERT INTO events (comments) VALUES ('"+comments+"')" , function(err, results, fields){
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

var selectEvent = function(cb) {
  connection.query('SELECT * FROM events', function(err, results, fields) {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};


module.exports.insertEvent = insertEvent;
moduel.exports.selectEvent = selectEvent;
