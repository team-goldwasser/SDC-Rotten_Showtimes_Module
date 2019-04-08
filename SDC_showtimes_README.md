
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

~ GET '/showtime/:title_url/:zip' - returns showtimes for movie at theater closest to specified zipcode

~ POST '/theater/showtime/:id' - inserts a new showtime record for the movie showing at the theater location specified by id

~ PUT 'theater/:id/showtime/:id' - to update a showtime for a particular movie showing at the specified theater location 

~ DELETE '/theater/:id/showtime/:id' - to remove any particular showtime for a movie at a     particular location


 