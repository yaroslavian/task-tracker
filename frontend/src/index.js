import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from './Components/Table/Table';
import {AddButton} from './Components/AddButton/AddButton';
import css from './style.styl';

const APP_CONTAINER = document.getElementById('app');

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         currentPage: 'main'
      }

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
                  <AddButton onClick={() => {this.setPage('add-form')}} />
                  <Table />   
               </div>
            );
            break;

         case 'add-form': 
            content = <div>Add task form would be here</div>; 
            break;
         default:
      }

      return (
         <div>
            <h3 className="main-title" onClick={() => {this.setPage('main')}}>
               Welcome to the task tracker
            </h3>
            {content}
         </div>
      );
   }
}

ReactDOM.render(<App />, APP_CONTAINER);