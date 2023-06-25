const Redis = require("ioredis");
const fs = require("fs");

const redis = new Redis({
  host: "redis-14641.c252.ap-southeast-1-1.ec2.cloud.redislabs.com",
  port: 14641,
  password: "YiMyCBewb9A3YiAt5nwnrUFQIMV6Oc4r",
});

module.exports = redis;
