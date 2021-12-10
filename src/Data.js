const Data = (props) => [
  {treatId: '0001', treatCourseId: '0100',  type: 'asthma', category: 'Respiritory', name: 'Joe', startDate: '01-01-2021'},

  {treatId: '0002', treatCourseId: '0300',  type: 'asthma', category: 'Brain', name: 'George', startDate: '01-02-2021'},

  {treatId: '0003', treatCourseId: '0200',  type: 'asthma', category: 'Pancreatic', name: 'Emily', startDate: '01-03-2021'},

  {treatId: '0004', treatCourseId: '0100',  type: 'asthma', category: 'Respiritory', name: 'Jeff', startDate: '01-04-2021'},

  {treatId: '0005', treatCourseId: '0200',  type: 'asthma', category: 'Pancreatic', name: 'Jonty', startDate: '01-05-2021'}
];
ReactDOM.render(
  <Treatmentrecord MedicalTreatment={MedicalTreatment} />,
  document.getElementById('container')
);

//This component contains all of the aribitory data I have used through out this assignemnet. I have used a very basic format to show case 5 different people with differing treatment plans