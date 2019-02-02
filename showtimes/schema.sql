/*database: rottentomatoes*/

CREATE TABLE theaters (
  ID SERIAL PRIMARY KEY,
  name varchar(80) NOT NULL UNIQUE,
  address varchar(80),
  city varchar(80),
  state varchar(20),
  zip varchar(20),
  phone varchar(20)
)

CREATE TABLE movies (
  ID SERIAL PRIMARY KEY,
  title varchar(80) NOT NULL UNIQUE
)

CREATE TABLE showtimes (
  ID SERIAL PRIMARY KEY,
  week_day varchar(80),
  start_time varchar(80),
  seat varchar(80),
  theater_id integer REFERENCES theaters(ID),
  movie_id integer REFERENCES movies(ID)
)
