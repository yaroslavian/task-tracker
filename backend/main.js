const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;

const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tasks';

app.use(express.static('public'));

app.get('/get-tasks-list', (req, res) => {
   const client = new MongoClient(DB_URL);

   client.connect(err => {
      console.log('connected to mongo server');
      const db = client.db(DB_NAME);
      const collection = db.collection('tasks');
      collection.find().toArray((err, docs) => {
         console.log(docs);
         res.json(JSON.stringify(docs));
      });
      client.close();
   });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));