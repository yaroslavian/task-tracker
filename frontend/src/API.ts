/**
 * Get task list
 * 
 * @param cb 
 */
function getTasksList(cb: (dataSet:string) => void): void {
   const URL: string = '/api/get-tasks-list';

   fetch(URL, {
      method: 'POST'
   }).then((res) => {
         return res.json();
   }).then((dataSet) => {
         cb(dataSet);
   });
};

/**
 * Add new task
 * 
 * @param reqBody 
 * @param cb 
 */
function addTask (reqBody: {taskTitle: string, taskText: string, [key:string]: string}, cb: () => void): void {
   const formData = new FormData();
   const URL: string = '/api/add-task';

   for(let key in reqBody) {
      if(reqBody.hasOwnProperty(key)) {
         formData.append(key, reqBody[key]);
      }
   }

   fetch(URL, {
      method: 'POST',
      body: formData
   }).then((res) => {
      return res.json();
   }).then(() => {
      cb();
   });
}

/**
 * Remove task by ID
 * 
 * @param cb 
 */
function deleteTask(taskId: string, cb: () => void): void {
   const URL: string = '/api/delete-task';
   const formData = new FormData();

   formData.append('taskId', taskId);

   fetch(URL, {
      method: 'POST',
      body: formData
   }).then((res) => {
      return res.json();
   }).then(() => {
      cb();
   });
};

export const API = {getTasksList, addTask, deleteTask};