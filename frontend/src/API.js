const getTasksList = (cb) => {
   fetch('/get-tasks-list')
      .then((res) => {
         return res.json();
      })
      .then((dataSet) => {
         cb(dataSet);
      });
};

const addTask = (reqBody, cb) => {
   const formData = new FormData();

   for(let key in reqBody) {
      formData.append(key, reqBody[key]);
   }

   fetch('/addTask', {
      method: 'POST',
      body: formData
   }).then((res) => {
      return res.json();
   }).then(() => {
      cb();
   });
}

export const API = {getTasksList, addTask};