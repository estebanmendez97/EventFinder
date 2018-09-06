DROP DATABASE IF EXISTS eventFinder;

CREATE DATABASE eventFinder;

USE eventFinder;

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT,
  event varchar(50) NOT NULL,
  rating varchar (50) NOT NULL,
  PRIMARY KEY (ID)

);


INSERT INTO events (event, comment) VALUES ("concert", "it's been the best concert ever");
INSERT INTO events (event, comment) VALUES ("concert", "the movie was reaaly good");
