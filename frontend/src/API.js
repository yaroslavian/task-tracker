const getTasksList = (cb) => {
   fetch('/get-tasks-list')
      .then((res) => {
         return res.json();
      })
      .then((dataSet) => {
         cb(dataSet);
      });
};

export const API = {getTasksList};