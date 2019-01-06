const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/get-tasks-list', (req, res) => {
   const dataSet = [
      { 
         name: 'Task_1',
         text: 'Text about task 1'
      },
      { 
         name: 'Task_2',
         text: 'Text about task 2'
      },
      { 
         name: 'Task_3',
         text: 'Text about task 3'
      }
   ]
   res.json(JSON.stringify(dataSet));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));