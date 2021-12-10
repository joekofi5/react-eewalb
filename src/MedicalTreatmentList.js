import MedicalTreatment from './MedicalTreatment.js'
import React from 'react'
import Data from './Data'
// The attribute data is coming form the Data.js component
  function Data(){
    return (
      <div>
        <ul>
          {
           this.state.data.map(function(item, i){
             console.log('Data');
             return <li key={i}> Data </li>
           })
         }
        </ul>
      </div>
    )
  }

ReactDOM.render(<Main />, document.getElementById('app')); 

// This component has utilised the array.map(item => <li></li>) operator to list the data provided by the data component