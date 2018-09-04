var mysql = require('mysql');


var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "holacode",
database: "eventFinder"
});

var selectEvent = function(cb){
connection.query('SELECT * FROM events', (err, results, fields)=> {
  if(err) {
    cb(err, null);
  } else {
    cb(null, results);
  }
});
};

var inserEvent = function(event, rating, cb) {
  connection.query('INSERT INTO events (event, rating) VALUES (?, ?)',
  [event, rating], (err, results, fields) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

module.exports.selectEvent = selectEvent;
module.exports.inserEvent = inserEvent;
