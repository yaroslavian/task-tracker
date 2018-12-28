import React from 'react';
import ReactDOM from 'react-dom';

const APP_CONTAINER = document.getElementById('app');

class App extends React.Component {
   render () {
      return <h3>Welcome to the task tracker</h3>;
   }
}

ReactDOM.render(<App />, APP_CONTAINER);