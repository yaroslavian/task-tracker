const express = require('express');
const app = express();
const PORT = 3000;

const MongoClient = require('mongodb').MongoClient;
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tasks';

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/get-tasks-list', (req, res) => {
   const client = new MongoClient(DB_URL);

   client.connect(err => {
      console.log('connected to mongo server');
      const db = client.db(DB_NAME);
      const collection = db.collection('tasks');
      collection.find().toArray((err, docs) => {
         res.json(JSON.stringify(docs));
      });
      client.close();
   });
});

app.post('/addTask', upload.none(), (req, res) => {
   const {taskTitle, taskText} = req.body;

   if(taskTitle && taskText) {
      const client = new MongoClient(DB_URL);
   
      client.connect(err => {
         const db = client.db(DB_NAME);
         const collection = db.collection('tasks');
         collection.insert({
            title: taskTitle, 
            text: taskText
         });
         client.close();
         res.json(JSON.stringify({status: 'ok'}));
      });
   }
}); 

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));