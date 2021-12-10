import React from "react";
import "./style.css";
import Data from "./Data";
import MedicalTreatment from "./MedicalTreatment";

//this is the displayed example of one of the treatment records in a more binary display.
function MedicalTreatment(props) {
  const attributes = {
    className: inputClasses.join(' '),
    treatId: '0001',
    treatCourseId: '0100',
    type: 'ashma',
    category: 'respiratory',
    Name: 'Joe',
    startDate: '01-01-2021',
    placeholder: this.props.placeholder || '',
    required: this.state.required,
    style: inputStyles,
  }
}
//
const App = (props) => {
  return (
    <div className='container'>
        <Data />
        </div>
  )
}

export default App


//This is the array filter operation which is used to display the given category. The category selected is Pancreatic which is one of the made up peices of attribute data
function App() {
<div>
  {category.filter(category => category.includes('Pancreatic')).map(filteredcategory => (
    <li>
      {filteredcategory}
    </li>
  ))}
</div>
}