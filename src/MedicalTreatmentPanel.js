import React, { useState } from 'react';
//I have imported the useState Hook from React
import Data from "./Data";
//The attributes are stored in the data.js component
function Data() {
  // this is the first hook and it is set up using treatId
  const [treatId, settreatId] = useState(0);

  return (
    <div>
      <p>You clicked {treatId} times</p>
      <button onClick={() => settreatId(treatId + 1)}>
        Treat Id
      </button>
    </div>
  );
}
//I have declared a new state variable by calling the useState Hook. 0 was used to initialie the hook. When the user clicks the button again you can see that the settreatId is called to pass the new count value

//This was then repeated for each of the attributes
function Data() {
 
  const [treatCourseId, settreatCourseId] = useState(0);

  return (
    <div>
      <p>You clicked {treatCourseId} times</p>
      <button onClick={() => settreatCourseId(treatCourseId + 1)}>
        Treat Course Id
      </button>
    </div>
  );
}

function Data() {

  const [type, settype] = useState(0);

  return (
    <div>
      <p>You clicked {type} times</p>
      <button onClick={() => settype(type + 1)}>
        Type
      </button>
    </div>
  );
}

function Data() {

  const [category, setcategory] = useState(0);

  return (
    <div>
      <p>You clicked {category} times</p>
      <button onClick={() => setcategory(category + 1)}>
        Category
      </button>
    </div>
  );
}

function Data() {

  const [Name, setName] = useState(0);

  return (
    <div>
      <p>You clicked {Name} times</p>
      <button onClick={() => setName(Name + 1)}>
        Name
      </button>
    </div>
  );
}

function Data() {

  const [startDate, setstartDate] = useState(0);

  return (
    <div>
      <p>You clicked {startDate} times</p>
      <button onClick={() => setstartDate(startDate + 1)}>
        Start Date
      </button>
    </div>
  );
}