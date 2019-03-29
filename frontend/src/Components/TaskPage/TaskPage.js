import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {API} from '../../API.ts' ;
import './TaskPage.styl';

export const TaskPage = ({match: {params: {id}}}) => {
   const [taskData, setTaskData] = useState(null);
   const [editMode, setEditMode] = useState(false);

   useEffect(() => {
      API.getTask(id, (response) => {
         setTaskData(JSON.parse(response));
      });
   },[]);

   const handleClick = () => {
      setEditMode(true);
   };


   if(!taskData) {
      return <div></div>;
   }

   const {title, text} = taskData;

   if(editMode) {
      return(
         <div className="taskPage edit-mode">
            <input className="taskPage-title" value={title} /><br />
            <input className="taskPage-text" value={text} />
            <div className="taskPage-button">Save</div>
         </div>
      );
   }

   return (
      <div className="taskPage">
         <div className="taskPage-title"><h3>{title}</h3></div>
         <div className="taskPage-text">{text}</div>
         <div className="taskPage-button" onClick={handleClick}>Edit</div>
      </div>
   );
};

TaskPage.propTypes = {
   match: PropTypes.object.isRequired
};