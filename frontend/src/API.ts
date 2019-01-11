function getTasksList(cb: (dataSet:string) => void): void {
   fetch('/get-tasks-list')
      .then((res) => {
         return res.json();
      })
      .then((dataSet) => {
         cb(dataSet);
      });
};

function addTask (reqBody: {taskTitle: string, taskText: string, [key:string]: string}, cb: () => void): void {
   const formData = new FormData();

   for(let key in reqBody) {
      if(reqBody.hasOwnProperty(key)) {
         formData.append(key, reqBody[key]);
      }
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