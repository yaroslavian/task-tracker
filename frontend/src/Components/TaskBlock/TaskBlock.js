import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../Button/Button';

/** Task block */
export const TaskBlock = (props) => {
   const {title, text} = props;

   const handleDeleteTask = () => {
      props.deleteHandler(props.taskId);
   }
   
   return (
      <div className="data-table-row">
         <Button text="Delete task" onClick={handleDeleteTask}/>
         <h4>{title}</h4>
         <em>{text}</em>
      </div>
   );
}

TaskBlock.propTypes = {
   taskId: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   deleteHandler: PropTypes.func.isRequired
}