


//query for getting one theater where zip = 
// SELECT "id", "name", "address", "city", "state", "zip", "phone"
// FROM "theaters"
// AS "theater"
// WHERE "theater".
// "zip" = '90044'
// LIMIT 1;


//query for getting all showtimes for 
// SELECT "id", "title", "title_url", "tmdb_poster_path", "tmdb_backdrop_path"
// FROM "movies"
// AS "movie"
// WHERE "movie".
// "title_url" = 'black_panther';

// SELECT * FROM "theaters" GROUP BY "zip";

// SELECT "id", "week_day", "start_time", "seat"
// FROM "showtimes"
// WHERE "theater_id" = "id"
// IN(SELECT "id"
//   FROM "theaters"
//   AS "theater"
//   WHERE "theater".
//   "zip" = '90002')





  //select "id" from "theaters" where "theaters"."zip" = '90002'
    
  
  /*  
    expect it to return 8 entries 
    5455 Landmark Tracy Summit Cinema
    9461 Landmark Waters Well Theaters
    12939 Regal Abel Place Pictures
    15181 Pacific Johnson Summit Studios
    17357 NewMark Okuneva Ramp Theatre
    17875 UA Heathcote Radial Pictures
    19105 ArcLight Ratke Port Studios
    23008 ArcLight Cronin Forge Cinema
  */

// select "id", "week_day", "start_time", "seat", "movie_id" FROM "showtimes" WHERE "showtimes"."theater_id" = 

// select "id", "week_day", "start_time", "seat", "movie_id"
// FROM "showtimes"
// WHERE "showtimes".
// "theater_id" = '5455'
// OR '9461'
// OR '12939'
// OR '15181'
// OR '17357'
// OR '17875'
// OR '19105'
// OR '23008'


//to get all showtimes where showtimes has a movie_id that equals id for aquaman
// select * from "showtimes"
// where "showtimes".
// "movie_id" = '297802';

// select * from "showtimes"
// where "showtimes".
// "theater_id" = '5000';
//                                                start      end
//starting showtime id for movie_id 169917 was 6299581 - 6299832 
//                                  102899     6299833




// SELECT "id" FROM "theaters" WHERE "theaters"."zip" = '90001';

// Theater

