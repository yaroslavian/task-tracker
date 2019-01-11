import React from 'react';
import {API} from '../../API.ts';

export class AddTaskForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         taskTitle: '',
         taskText: ''
      };
      
      this.handleAdd = this.handleAdd.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
   }

   handleAdd(e) {
      e.preventDefault();
      const {taskTitle, taskText} = this.state;
      const reqBody = {taskText, taskTitle};

      API.addTask(reqBody, () => {
         this.props.setPage('main');
      });
   }

   handleCancel(e) {
      e.preventDefault();
      this.props.setPage('main');
   }

   handleInputChange(e) {
      this.setState({
         taskTitle: e.target.value 
      });
   }

   handleTextAreaChange(e) {
      this.setState({
         taskText: e.target.value 
      });
   }
   
   render() {
      return (
         <form className="addTask-form">
            <input type="text" placeholder="Task title" onChange={this.handleInputChange} value={this.state.taskTitle}></input>
            <textarea placeholder="Task text" onChange={this.handleTextAreaChange} value={this.state.taskText}></textarea>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={this.handleCancel}>Cancel</button>
         </form>
      );
   }
}