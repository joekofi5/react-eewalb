import react from 'react'

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
    style: inputStyles
  }
  return <div>
    <h1>{Name}</h1>
    <h2>{treatId}</h2>
    <h2>{treatCourseId}</h2>
    <h2>{type}</h2>
    <h2>{category}</h2>
    <h2>{startDate}</h2>
  </div>	
  
}

//This component had its attribute date written out as opposed to using a differnt component. This has been done using a props perameter