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
      API.deleteTask(taskId, () => {
         API.getTasksList((dataSet) => {
            setDataSet(JSON.parse(dataSet));
         });
      });
   };

   let items = null;

   if(dataSet) {
      items = dataSet.map((elem, index) => {
         return (
            <TaskBlock
               key={index}
               deleteHandler={handleDeleteTask}
               taskId={elem._id}
               title={elem.title}
               text={elem.text}
            />
         );
      });
   }

   return <div className="data-table">{items}</div>;
};