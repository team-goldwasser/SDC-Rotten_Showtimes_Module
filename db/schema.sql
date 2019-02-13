/*database: rottentomatoes*/

CREATE TABLE theaters (
  ID SERIAL PRIMARY KEY,
  name varchar(80) NOT NULL UNIQUE,
  address varchar(80),
  city varchar(80),
  state varchar(20),
  zip bigint,
  phone varchar(20)
)

CREATE TABLE movies (
  ID SERIAL PRIMARY KEY,
  tmdb_id varchar(20) NOT NULL UNIQUE,
  title varchar(80) NOT NULL UNIQUE,
  title_url varchar(80),
  tmdb_poster_path varchar(80),
  tmdb_backdrop_path varchar(80)
)

CREATE TABLE showtimes (
  ID SERIAL PRIMARY KEY,
  week_day integer,
  start_time varchar(80),
  seat varchar(80),
  theater_id integer REFERENCES theaters(ID),
  movie_id integer REFERENCES movies(ID)
)
