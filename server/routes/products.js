'use strict'

const express = require('express')
const redis = require('redis');

const client = redis.createClient(
//   {
//   host: 'redis-server',
//   port: 6379
// }
);
client.set('visits', 0);

// Create express router
const router = express.Router()

// GET /products
router.get('/products', (req, res) => {
  res.json('Hello Products! jhjh')
})


router.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

// Export router
module.exports = router
