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
  id bigint NOT NULL UNIQUE PRIMARY KEY,
  title varchar(255) NOT NULL UNIQUE,
  title_url varchar(255),
  tmdb_poster_path varchar(255),
  tmdb_backdrop_path varchar(255)
)

CREATE TABLE showtimes (
  ID SERIAL PRIMARY KEY,
  week_day integer,
  start_time varchar(80),
  seat varchar(80),
  theater_id integer REFERENCES theaters (ID),
  movie_id bigint REFERENCES movies (id)
)
