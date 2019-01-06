import React from 'react';
import {API} from '../../API.js';

export class Table extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dataSet: null
      };
   }
   
   componentDidMount() {
      API.getTasksList((dataSet) => {
         this.setState({
            dataSet: JSON.parse(dataSet)
         });
      });
   }

   render () {
      const {dataSet} = this.state;
      let items = null;

      if(dataSet) {
         items = dataSet.map((elem, index) => {
            return (
               <div key={index} className="data-table-row">
                  <h4>{elem.name}</h4>
                  <em>{elem.text}</em>
               </div>
            );
         });
      } 

      return <div className="data-table">{items}</div>;
   }
}