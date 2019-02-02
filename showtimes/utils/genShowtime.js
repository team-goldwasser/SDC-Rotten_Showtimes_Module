// const sample = {
//   week_day: 'Friday',
//   start_time: '19:15',
//   seat: 'standard',
//   theater_id: 3,
//   movie_id: 1
// }

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const seat = ['standard', 'recliner'];
const start_time = ['00', '15', '30', '45'];

const generateDayTimeClass = (countPerDay) => {
  var results = [];

  days.forEach((day) => {
    var count = countPerDay;
    while(count > 0) {
      var combo = {};
      combo.week_day = day;
      combo.start_time = Math.floor(Math.random() * (23 - 9) + 9).toString() + ':' + start_time[Math.floor(Math.random() * start_time.length)];
      combo.seat = seat[Math.floor(Math.random() * seat.length)];
      results.push(combo);
      count--;
    }
  })

  return results;
}

//module.exports =