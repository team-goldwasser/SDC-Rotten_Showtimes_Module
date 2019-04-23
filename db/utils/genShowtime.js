const days = [0, 1, 2, 3, 4, 5, 6];
const seat = ['standard', 'recliner', '3D'];
const startTime = ['00', '15', '30', '45'];
const moviePlayCountPerDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// theater operating hours
const open = 10;
const close = 22;

// db id
const generateIds = (count) => {
  var result = [];
  var newMaxCount = count + 500;

  while (count < newMaxCount) {
    // while (count < 5001) {
    result.push(count)
    count++;
  }
  return result;
}
// const theaterIds = [1,2,3,4,5];
// const theaterIds = generateIds(1);
//could do a selectAll query to return all ids from theaters

// console.log(theaterIds[theaterIds.length - 1]);
// hand-picked 5 movies' id:
// Black Panther, The Avengers, Inception, Star Wars: The Last Jedi, Incredibles 2
const movieIds = [284054, 24428, 27205, 181808, 260513, 169917, 102899, 245891, 263115, 297802];

const randomIndex = array => Math.floor(Math.random() * array.length);

const generateShowtime = (count) => {
  const results = [];

  var theaterIds = generateIds(count);

  theaterIds.forEach((theaterId) => { //iterates over each id supplied to this function
    movieIds.forEach((movieId) => { //loops over each movie in the array
      days.forEach((day) => {  //loops over day of the week
        let count = moviePlayCountPerDay[randomIndex(moviePlayCountPerDay)]; //stores a count value that will be the number of showtime string to create per day
        while (count > 0) {  //as long as that count is greater than zero
          const showtime = {};  //create an object to store each shwtime
          showtime.start_time = `${Math.floor(Math.random() * (close - open) + open)}:${startTime[randomIndex(seat)]}`; //it generates a random start time string
          showtime.week_day = day; //sets the day for showtime to the current day in loop
          showtime.seat = seat[randomIndex(seat)]; //sets a random set type
          showtime.theater_id = theaterId; // sets the current theater id 
          // showtime.theater_id = 66;
          showtime.movie_id = movieId; // 
          results.push(showtime);
          count--;
        }
      });
    });
  });
  // console.log('the results length', results.length);
  return results;
};


module.exports = generateShowtime;