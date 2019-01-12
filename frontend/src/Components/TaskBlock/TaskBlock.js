import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../Button/Button';

export class TaskBlock extends React.Component {
   constructor(props) {
      super(props);

      this.handleDeleteTask = this.handleDeleteTask.bind(this);
   }
   
   handleDeleteTask() {
      this.props.deleteHandler(this.props.taskId);
   }
   
   render() {
      return (
         <div className="data-table-row">
            <Button text="Delete task" onClick={this.handleDeleteTask}/>
            <h4>{this.props.title}</h4>
            <em>{this.props.text}</em>
         </div>
      );
   }
}

TaskBlock.propTypes = {
   taskId: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   deleteHandler: PropTypes.func.isRequired
}
