const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tasks';

const getTasksList = (req, res) => {
   const client = new MongoClient(DB_URL);

   client.connect(err => {
      const db = client.db(DB_NAME);
      const collection = db.collection('tasks');
      collection.find().toArray((err, docs) => {
         res.json(JSON.stringify(docs));
      });
      client.close();
   });
};

const addTask = (req, res) => {
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
}

const deleteTask = (req, res) => {
   const {taskId} = req.body;

   if(taskId) {
      const client = new MongoClient(DB_URL);

      client.connect(err => {
         const db = client.db(DB_NAME);
         const collection = db.collection('tasks');
         collection.deleteOne({
            _id: new mongodb.ObjectID(taskId)
         });
         client.close();
         res.json(JSON.stringify({status: 'ok'}));
      });
   }
}

module.exports = {getTasksList, addTask, deleteTask};