const Redis = require("ioredis");
require('dotenv').config();


const redis = new Redis(process.env.REDIS_URL);

redis.set("test", "THIS REDIS IS WORKING"); 
redis.get("test", function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Promise resolves to "bar"
  }
});