// {
//   id: 24428,
//   title: 'The Avengers',
//   title_url: 'the_avengers',
//   tmdb_poster_path: '/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
//   tmdb_backdrop_path: '/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
// }

const movies = require('../sample/parsedMovies.js');

const generateMovie = () => {
  const results = [];

  movies.forEach((movie) => {
    movieTitle = {};
    movieTitle.tmdb_id = movie.id;
    movieTitle.title = movie.title;
    movieTitle.title_url = movie.title_url;
    movieTitle.tmdb_poster_path = movie.tmdb_poster_path;
    movieTitle.tmdb_backdrop_path = movie.tmdb_backdrop_path;
    results.push(movieTitle);
  });

  return results;
};

module.exports = generateMovie;
