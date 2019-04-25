require('newrelic');
const app = require('./app.js');

const PORT = 9002 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`showtime service is listening on port ${PORT}`);
});
