import React, {useState, useEffect} from 'react';
import {API} from '../../API.ts';
import {TaskBlock} from '../TaskBlock/TaskBlock';

/** Main table component */
export const Table = () => {
   const [dataSet, setDataSet] = useState(null);

   useEffect(() => {
      API.getTasksList((dataSet) => {
         setDataSet(JSON.parse(dataSet));
      });
   }, []);

   const handleDeleteTask = (taskId) => {
      if(confirm('Are you sure want to delete this item?')) {
         API.deleteTask(taskId, () => {
            API.getTasksList((dataSet) => {
               setDataSet(JSON.parse(dataSet));
            });
         });
      }
   };

   let items = null;

   if(dataSet) {
      items = dataSet.map((elem, index) => {
         const {_id, title, text, status} = elem;
         return (
            <TaskBlock
               key={index}
               deleteHandler={handleDeleteTask}
               taskId={_id}
               title={title}
               text={text}
               status={status}
            />
         );
      });
   }

   return <div className="data-table">{items}</div>;
};