import React from 'react';

export class AddTaskForm extends React.Component {
   constructor(props) {
      super(props);

      this.handleAdd = this.handleAdd.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
   }

   handleAdd(e) {
      e.preventDefault();
      this.props.setPage('main');
   }

   handleCancel(e) {
      e.preventDefault();
      this.props.setPage('main');
   }
   
   render() {
      return (
         <form className="addTask-form">
            <input type="text" placeholder="Task title"></input>
            <textarea placeholder="Task text"></textarea>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={this.handleCancel}>Cancel</button>
         </form>
      );
   }
}