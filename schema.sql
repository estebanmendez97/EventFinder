DROP DATABASE IF EXISTS eventFinders;

CREATE DATABASE eventFinders;

USE eventFinders;

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT,
  comments varchar (50) NOT NULL,
  PRIMARY KEY (ID)

);
