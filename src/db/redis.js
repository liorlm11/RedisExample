const redis = require('redis')
const { promisifyAll } = require('bluebird') // פונקציית "פרומיס אול" היא פונקציה שעוברת על אובייקט וומוסיפה לפונקציות שבו גרסה אסינכורונית של אותה הפונקציה

promisifyAll(redis) //  מוסיפים לאובייקט של רדיס את השימוש בפונקציות אסינכרוניות

const redisClient = redis.createClient({ 
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
})

module.exports = redisClient