import $ from 'jquery';

const getInfo = (zip, callback) => {
  // sample url: "some-host/m/black_panther"
  const titleUrl = window.location.pathname.split('/m/')[1].replace('/', '');
  $.ajax({
    url: `http://ec2-54-219-183-29.us-west-1.compute.amazonaws.com:80/showtime/${titleUrl}/${zip}`,
    type: 'GET',
    contentType: 'application/json',
  })
    .done((data) => {
      console.log(data);
      if (data.showtimes.length === 0) {
        const showtimes = [
          { id: 2989, start_time: '11:45', seat: 'recliner' },
          { id: 2991, start_time: '16:45', seat: 'recliner' },
          { id: 2992, start_time: '17:15', seat: '3D' },
          { id: 2992, start_time: '19:45', seat: 'standard' },
          { id: 2993, start_time: '21:30', seat: '3D' },
          { id: 2994, start_time: '22:15', seat: 'recliner' },
        ];
        data.showtimes = showtimes;
      }
      callback(data);
    })
    .fail(() => {
      console.log('failed to get theater & showtime info');
      const defaultData = {
        movie_title_url: 'disaster_movie',
        week_day: new Date().getDay(),
        showtimes: [
          { id: 2989, start_time: '11:45', seat: 'recliner' },
          { id: 2991, start_time: '16:45', seat: 'recliner' },
          { id: 2992, start_time: '17:15', seat: '3D' },
          { id: 2992, start_time: '19:45', seat: 'standard' },
          { id: 2993, start_time: '21:30', seat: '3D' },
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
