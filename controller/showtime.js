var models = require('../models');


module.exports.addShowtimes = (req, res, next) => {
  var start = now();
  const url = req.route.path;
  console.log('inside the addShowtimes', req.body)
  const week_day = req.body.week_day;
  const start_time = req.body.start_time;
  const seat = req.body.seat;
  const theater_id = req.body.theaterId;
  const title_url = req.body.title_url;

  models.Movie.findOne({ include: { title_url: title_url }})
  .then(movie => {
    const movie_id = movie.id
    models.Showtime.create({
      week_day,
      start_time,
      seat,
      theater_id,
      movie_id })
    .then(showtime => {
      console.log('success creating a showtime', showtime);
      res.status(201).redirect(reRoute)
    })
    .catch(err => {
      console.log('err creating showtime', err);
    })
  })
  var end = now();
  console.log('***getTheater query performance time:', end - start);
}

module.exports.updateShowtime = (req, res, next) => {
  const url = req.route.path;
  const edits = req.body.edits;
  const id = edits.id
  const week_day = edits.week_day;
  const start_time = edits.start_time;
  const seat = edits.seat
  const theater_id = edits.theater_id;
  const movie_id = edits.movie_id;

  models.Showtime.findByPk(id)
  .then(showtime => {
    showtime.id = id;
    showtime.week_day = week_day;
    showtime.start_time = start_time;
    showtime.seat = seat;
    showtime.theater_id = theater_id;
    showtime.movie_id = movie_id;
    return showtime.save();
  })
  .then(result => {
    console.log('updated showtime', result);
    res.redirect(reRoute)
  })
  .catch(err => console.log('err updating a single showtime', err))

}


module.exports.updateShowtimes = (req, res, next) => {


}


module.exports.deleteShowtime = (req, res, next) => {
  const reRoute = req.route.path;
  const showId = req.body.id;
  models.Showtime.findByPk(showId)
  .then(showtime => {
    return showtime.destroy()
  })
  .then(result => {
    console.log('deleted showtime', result);
    res.redirect(reRoute)
  })
  .catch(err => console.log('err trying to delete showtime', err))
}



module.exports.deleteAllShowtimes = (req, res, next) => {

}