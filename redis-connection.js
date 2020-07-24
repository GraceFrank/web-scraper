const redis = require('redis');
const util = require('util');
const config = require('./config');

const redisClient = redis.createClient({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
    password: config.REDIS_PASSWORD
});
redisClient.get = util.promisify(redisClient.get);

function connectToRedis() {
    redisClient.on('connect', () => console.log('connected to redis server'));
    redisClient.on('error', err => console.log(err));
}


connectToRedis()


module.exports = { redisClient, connectToRedis };
