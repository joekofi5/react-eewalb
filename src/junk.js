function App() {
  return (<div className="App">
  <h1>{Name}</h1>
  <h2>{treatId}</h2>
  <h2>{treatCourseId}</h2>
  <h2>{type}</h2>
  <h2>{category}</h2>
  <h2>{startDate}</h2>
  </div>);
}
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
export default MedicalTreatment;

//old unsued code