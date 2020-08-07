const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(express.static('build'));

router.get('/health', (_req, res) => {
  res.status(200).end('OK');
});

console.log('process.env', process.env);

if (process.env.USE_SERVER === 'true') {
  const redisClient = redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6777,
  });
  
  redisClient.on('error', error => {
    console.error(error);
  });
  
  router.get('/tasks', (_req, res) => {
    redisClient.get('tasks', (err, result) => {
      if (err) {
        return res.status(500).end('Bad request');
      }
  
      let reqResult;
  
      if (result) {
        reqResult = JSON.parse(result);
      } else {
        reqResult = null;
      }
  
      res.status(200).json(reqResult);
    });
  });
  
  router.post('/tasks', (req, res) => {
    const tasks = req.body;
    const jsonTasks = JSON.stringify(tasks);
  
    console.log('jsonTasks', jsonTasks);
  
    redisClient.set(['tasks', jsonTasks], (err, result) => {
      if (err) {
        return res.status(500).end('Bad request');
      }
  
      res.status(200).json({});
    });
  });
}

router.all('*', (_req, res) => {
  res.status(404).end();
});

app.use(router);

app.listen(3000, () => {
  console.log('Server started');
});
