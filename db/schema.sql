/*database: rottentomatoes*/

IF NOT EXISTS CREATE DATABASE rottentomatoes;

DROP TABLE showtimes;
DROP TYPE seat;
DROP TABLE theaters;
DROP TABLE movies;


CREATE TABLE theaters(
  ID SERIAL PRIMARY KEY,
  name varchar(80) NOT NULL,
  address varchar(80),
  city varchar(80),
  state varchar(20),
  zip integer,
  phone varchar(20)
);

CREATE TABLE movies(
  id integer NOT NULL UNIQUE PRIMARY KEY,
  title varchar(255) NOT NULL,
  title_url varchar(255) UNIQUE,
  tmdb_poster_path varchar(255),
  tmdb_backdrop_path varchar(255)
);

CREATE TYPE seat AS ENUM('standard', 'recliner', '3D');
CREATE TABLE showtimes(
  ID SERIAL PRIMARY KEY,
  week_day integer,
  start_time varchar(80),
  seat varchar(80),
  theater_id integer REFERENCES theaters (ID),
  movie_id integer REFERENCES movies (id)
);


-- COPY movies FROM '/home/ec2-user/SDC-Rotten_Showtimes_Module/db/sample/movies.csv'
-- DELIMITER ','
-- CSV HEADER;

COPY movies FROM '/Users/macbook/Documents/HRPT11/SDC-Rotten_Showtimes_Module/db/sample/movies.csv'
DELIMITER ','
CSV HEADER;


-- ALTER TABLE theaters ADD UNIQUE (name);
-- ALTER TABLE movies ADD UNIQUE (title);

