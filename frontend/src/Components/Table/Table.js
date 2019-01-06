import React from 'react';

export class Table extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dataSet: null
      };
   }
   componentDidMount() {
      fetch('/get-tasks-list')
         .then((res) => {
            return res.json();
         }).then((dataSet) => {
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
               <div key={index}>
                  <h4>{elem.name}</h4>
                  <em>{elem.text}</em>
               </div>
            );
         });
      } 

      return <div>{items}</div>;
   }
}