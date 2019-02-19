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
        movie_title_url: 'disaster_movie',
        week_day: new Date().getDay(),
        showtimes: [
          { id: 2989, start_time: '11:45', seat: 'recliner' },
          { id: 2990, start_time: '13:15', seat: 'standard' },
          { id: 2991, start_time: '16:45', seat: 'recliner' },
          { id: 2992, start_time: '19:45', seat: 'standard' },
          { id: 2993, start_time: '21:30', seat: 'recliner' },
          { id: 2994, start_time: '22:15', seat: 'recliner' },
        ],
        theater_id: 2,
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
