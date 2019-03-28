import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {Table} from './Components/Table/Table';
import {AddTaskForm} from './Components/AddTaskForm/AddTaskForm';
import {TaskPage} from './Components/TaskPage/TaskPage';
import './style.styl';

const APP_CONTAINER = document.getElementById('app');

/** Main component */
const App = () => {
   const renderTopMenu = () => {
      return (
         <div className="topMenu">
            <NavLink className="topMenu-item" to="/">Task list</NavLink>
            <NavLink className="topMenu-item" to="/add-Task">AddTask</NavLink>
         </div>
      );
   };

   return (
      <Router>
         <div>
            <NavLink to="/" className="main-title">
               <h3 className="main-title">Welcome to the task tracker</h3>
            </NavLink>
            {renderTopMenu()}
            <Route path="/" exact component={Table} />
            <Route path="/add-task" component={AddTaskForm} />
            <Route path="/task/:id" component={TaskPage} />
         </div>
      </Router>
   );
};

ReactDOM.render(<App />, APP_CONTAINER);