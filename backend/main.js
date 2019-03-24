const express = require('express');
const app = express();
const PORT = 3000;

const API = require('./API');

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/api/:methodName', upload.none(), (req, res) => {
   const {methodName} = req.params;
   if(methodName) {
      let APIMethodName = methodName.split('-').reduce((acc, elem) => {
         return acc + (elem.charAt(0).toUpperCase() + elem.slice(1));
      });
      if(API.hasOwnProperty(APIMethodName)) {
         API[APIMethodName](req, res);
      }
   }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));