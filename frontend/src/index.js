import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from './Components/Table/Table';

const APP_CONTAINER = document.getElementById('app');

class App extends React.Component {
   render () {
      return (
         <div>
            <h3>Welcome to the task tracker</h3>
            <Table />
         </div>
      );
   }
}

ReactDOM.render(<App />, APP_CONTAINER);