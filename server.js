const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6777,
});

redisClient.on('error', error => {
  console.error(error);
});

app.use(bodyParser.json());
app.use(express.static('build'));

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

router.all('*', (_req, res) => {
  res.status(404).end();
});

app.use(router);

app.listen(1234, () => {
  console.log('Server started');
});
