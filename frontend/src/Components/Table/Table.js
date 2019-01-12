import React from 'react';
import {API} from '../../API.ts';
import {TaskBlock} from '../TaskBlock/TaskBlock';

export class Table extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dataSet: null
      };
      this.handleDeleteTask = this.handleDeleteTask.bind(this);
   }
   
   componentDidMount() {
      API.getTasksList((dataSet) => {
         this.setState({
            dataSet: JSON.parse(dataSet)
         });
      });
   }

   handleDeleteTask(taskId) {
      API.deleteTask(taskId, () => {
         API.getTasksList((dataSet) => {
            this.setState({
               dataSet: JSON.parse(dataSet)
            });
         });
      });
   }

   render () {
      const {dataSet} = this.state;
      let items = null;

      if(dataSet) {
         items = dataSet.map((elem, index) => {
            return (
               <TaskBlock 
                  key={index}
                  deleteHandler={this.handleDeleteTask}
                  taskId={elem._id}
                  title={elem.title}
                  text={elem.text}
               />
            );
         });
      } 

      return <div className="data-table">{items}</div>;
   }
}