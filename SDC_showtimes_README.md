
## Getting Started

Install PostgreSQL:
- https://www.postgresql.org/download/macosx/

- Start a PSQL server
  $ psql -U username -p

- Log in to user, either `postgres` for or create own user

## Create database `rottentomatoes`:

- psql -U postgres
- psql=# CREATE DATABASE rottentomatoes

- Connect to rottentomatoes database server
```psql -s rottentomatoes```

## Create tables:
  you can create tables by dragging the file `./db/schema.sql` into psql 
  or run this command in psql terminal:
- \i './db/schema.sql';

## Installing
- ```npm install```
## Build
- Dev: ```npm run dev```
- Production: ```npm run build```

## Start Local Server
- ```npm start```
## Test
- Run Jest tests: ```npm run test```

## Seeding Database
- ```npm run seed-all```


## CRUD Api

~ GET '/showtime/:title_url/:zip/theaters' - returns a list of all theaters from specified zipcode        with showtimes for specified title_url

~ POST '/theater/:id/:title_url/:showtime' - to add a showtime for a particular movie at a           theater location

      day=2&time=1000&st=standard - adds a m

~ PUT '/theater/:id/:title_url/:showtime' - to update a showtime for a particular movie and          theater location 

~ DELETE '/theater/:id/:title_url/:showtime' - to remove any particular showtime for a movie at a     particular location


 