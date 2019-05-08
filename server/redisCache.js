require('dotenv').config();

var redis = require('redis');
var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_EC2HOST);

const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_EC2HOST);


client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});


const cacheQuery = (req, res, next) => {
  console.log('inside the redis cacheQuery', req.originalUrl);
  const origUrl = req.originalUrl;
  client.get(origUrl, (err, cache) =>  {
    if(err) {
      console.log('error getting cache', err);
    }
    //if cache exists 
    if(cache) {
      console.log('inside cacheQuery in redisCache.js', cache)
      //need to parse after getting from redis, because its stringified when cached
      res.status(200).json(JSON.parse(cache));
    } else {
      next();
    }
  });
}

module.exports = { client, cacheQuery };  