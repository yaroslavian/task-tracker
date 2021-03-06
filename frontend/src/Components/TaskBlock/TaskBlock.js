import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import './TaskBlock.styl';

/** Task block */
export const TaskBlock = (props) => {
   const {taskId, title, text, status} = props;

   const handleDeleteTask = () => {
      props.deleteHandler(props.taskId);
   };

   return (
      <div className="data-table-row taskBlock">
         <Button text="Delete task" onClick={handleDeleteTask}/>
         <NavLink to={`/task/${taskId}`}><h4>{title}</h4></NavLink>
         <span className="taskBlock-status">{status}</span>
         <em>{text}</em>
      </div>
   );
};

TaskBlock.propTypes = {
   taskId: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   status: PropTypes.string.isRequired,
   deleteHandler: PropTypes.func.isRequired
};