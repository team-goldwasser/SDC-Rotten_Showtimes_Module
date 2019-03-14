## What is it?
- Tickets & Showtimes module for a Rotten Tomatoes clone project.
- It allows user to see movie showtimes of the day in a close-by theater and update location.

## Getting Started
### Prerequisite
- Install PostgreSQL:
https://www.postgresql.org/download/macosx/
- Start a PSQL server
```postgres -D /usr/local/var/postgres```
- In a new window, create database rottentomatoes
```createdb rottentomatoes```
- Use the rottentomatoes database
```psql -s somedbname```
- Copy code in schema.sql and paste into the database command line to create tables and schemas
### Installing
- ```npm install```
### Seed demo data
- ```npm run seed-all```
### Build
- Dev: ```npm run dev```
- Production: ```npm run build```
### Start Local Server
- ```npm start```
### Test
- Run Jest tests: ```npm run test```

## Deployement
AWS: Dockerized Node App & RDS for PostgreSQL
- http://ec2-54-219-183-29.us-west-1.compute.amazonaws.com/m/black_panther/

Cloudfront with improved page load speed
- http://dac6rql6mwxt8.cloudfront.net/m/black_panther/

Change movie title in the url to update (e.g. the_avengers)

## Tech Choices
Client
- Vue
- Bootstrap
- Bootstrap-Vue
- CSS
	
Server
- Node
- Express

Database
- PostgreSQL
- Sequelize

Testing
- Jest
- Vue-Test-Utils

## Acknowledgements
- This is a group project that I completed with bernardlau and chrisweilacker at Hack Reactor.
- Each member clones one service module from Rotten Tomatoes
- Each member creates a proxy server to combine all modules

## Related Projects
- Proxy Server: https://github.com/number-ape/rotten_pomodoro_proxy_chen
- Scoreboard (chrisweilacker): https://github.com/number-ape/Rotten_Tomatoes_Scoreboard_Service
- Audience Review (bernardlau): https://github.com/number-ape/Rotten_Tomatoes_Reviews_Service




