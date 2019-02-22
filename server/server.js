const app = require('./app.js');

const port = 9002;

app.listen(port, () => {
  console.log(`showtime service is listening on port ${port}`);
});
