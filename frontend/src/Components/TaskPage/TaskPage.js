import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {API} from '../../API.ts' ;
import './TaskPage.styl';

export const TaskPage = ({match: {params: {id}}}) => {
   const [taskData, setTaskData] = useState(null);


   useEffect(() => {
      API.getTask(id, (response) => {
         setTaskData(JSON.parse(response));
      });
   },[]);

   if(!taskData) {
      return <div></div>;
   }

   const {title, text} = taskData;

   return (
      <div className="taskPage">
         <div>{title}</div>
         <div>{text}</div>
      </div>
   );
};

TaskPage.propTypes = {
   match: PropTypes.object.isRequired
};