import $ from 'jquery';

const getInfo = (title, zip, callback) => {
  $.ajax({
    url: `/showtime/${title}/${zip}`,
    type: 'GET',
    contentType: 'application/json',
  })
    .done((data) => {
      console.log(data);
      callback(data);
    })
    .fail(() => {
      console.log('failed to get theater & showtime info');
      const defaultData = {
        movie_title: 'Disaster Movie',
        week_day: new Date().getDay(),
        showtimes: [
          { id: 2989, start_time: '17:45', seat: 'recliner' },
          { id: 2990, start_time: '19:15', seat: 'standard' },
          { id: 2991, start_time: '10:45', seat: 'recliner' },
          { id: 2992, start_time: '9:45', seat: 'standard' },
          { id: 2993, start_time: '11:45', seat: 'recliner' },
          { id: 2994, start_time: '10:15', seat: 'recliner' },
        ],
        theater_id: 5,
        theater_name: 'Disaster Movie Theater',
        address: '666 6th St.',
        city: 'San Francisco',
        state: 'CA',
        zip: '94666',
        phone: '(415) 666-6666',
      };
      callback(defaultData);
    });
};

export default getInfo;
