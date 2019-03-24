import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Table} from './Components/Table/Table';
import {Button} from './Components/Button/Button';
import {AddTaskForm} from './Components/AddTaskForm/AddTaskForm';
import './style.styl';

const APP_CONTAINER = document.getElementById('app');

const App = () => {
   const [currentPage, setPage] = useState('main');
   let content;

   switch(currentPage) {
      case 'main':
         content = (
            <div>
               <Button text="Add task" onClick={() => { setPage('add-form'); }} />
               <Table />
            </div>
         );
         break;

      case 'add-form':
         content = <AddTaskForm setPage={setPage}/>;
         break;
   }

   return (
      <div>
         <h3 className="main-title" onClick={() => { setPage('main'); }}>
            Welcome to the task tracker
         </h3>
         {content}
      </div>
   );
};

ReactDOM.render(<App />, APP_CONTAINER);