import React, {useState, useEffect, useRef} from 'react';
import {API} from '../../API.ts';
import { Redirect } from 'react-router-dom';

/** Form for creating new task */
export const AddTaskForm = () => {

   const [taskTitle, setTaskTitle] = useState('');
   const [taskText, setTaskText] = useState('');
   const [redirect, setRedirect] = useState(false);

   const titleRef = useRef(null);

   useEffect(() => {
      titleRef.current.focus();
   }, []);

   const handleAdd = (e) => {
      e.preventDefault();
      const reqBody = {taskText, taskTitle};

      API.addTask(reqBody, () => {
         setRedirect(true);
      });
   };

   const handleCancel = (e) => {
      e.preventDefault();
      setRedirect(true);
   };

   const handleInputChange = (e) => {
      setTaskTitle(e.target.value);
   };

   const handleTextAreaChange = (e) => {
      setTaskText(e.target.value);
   };

   if(redirect) {
      return <Redirect to="/" />;
   }

   return (
      <form className="addTask-form">
         <input
            type="text"
            ref={titleRef}
            placeholder="Task title"
            onChange={handleInputChange}
            value={taskTitle}>
         </input>
         <textarea placeholder="Task text" onChange={handleTextAreaChange} value={taskText}></textarea>
         <button onClick={handleAdd}>Add</button>
         <button onClick={handleCancel}>Cancel</button>
      </form>
   );
};