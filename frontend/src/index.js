import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from './Components/Table/Table';
import {Button} from './Components/Button/Button';
import {AddTaskForm} from './Components/AddTaskForm/AddTaskForm';
import css from './style.styl';

const APP_CONTAINER = document.getElementById('app');

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         currentPage: 'main'
      };

      this.setPage = this.setPage.bind(this);
   }

   setPage(page) {
      this.setState({
         currentPage: page
      });
   }

   render() {
      let content;

      switch(this.state.currentPage) {
         case 'main':
            content = (
               <div>
                  <Button text="Add task" onClick={() => { this.setPage('add-form'); }} />
                  <Table />
               </div>
            );
            break;

         case 'add-form':
            content = <AddTaskForm setPage={this.setPage}/>;
            break;
         default:
      }

      return (
         <div>
            <h3 className="main-title" onClick={() => { this.setPage('main'); }}>
               Welcome to the task tracker
            </h3>
            {content}
         </div>
      );
   }
}

ReactDOM.render(<App />, APP_CONTAINER);