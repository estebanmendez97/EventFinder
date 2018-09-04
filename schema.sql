DROP DATABASE IF EXISTS eventFinder;

CREATE DATABASE eventFinder;

USE eventFinder;

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT,
  event varchar(50) NOT NULL,
  rating varchar (50) NOT NULL,
  PRIMARY KEY (ID)

);


INSERT INTO events (event, rating) VALUES ("concert", "1");
INSERT INTO events (event, rating) VALUES ("concert", "2");
INSERT INTO events (event, rating) VALUES ("cinema", "2");
INSERT INTO events (event, rating) VALUES ("theater", "4");
