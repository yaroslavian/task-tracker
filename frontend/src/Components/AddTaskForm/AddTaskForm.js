import React, {useState} from 'react';
import {API} from '../../API.ts';

/** Form for creating new task */
export const AddTaskForm = (props) => {

   const [taskTitle, setTaskTitle] = useState('');
   const [taskText, setTaskText] = useState('');

   const handleAdd = (e) => {
      e.preventDefault();
      const reqBody = {taskText, taskTitle};

      API.addTask(reqBody, () => {
         props.setPage('main');
      });
   };

   const handleCancel = (e) => {
      e.preventDefault();
      props.setPage('main');
   };

   const handleInputChange = (e) => {
      setTaskTitle(e.target.value);
   };

   const handleTextAreaChange = (e) => {
      setTaskText(e.target.value);
   };

   return (
      <form className="addTask-form">
         <input type="text" placeholder="Task title" onChange={handleInputChange} value={taskTitle}></input>
         <textarea placeholder="Task text" onChange={handleTextAreaChange} value={taskText}></textarea>
         <button onClick={handleAdd}>Add</button>
         <button onClick={handleCancel}>Cancel</button>
      </form>
   );
};