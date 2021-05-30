import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "..";

const retMonth = (id) => {
    let mths;
  switch (id) {
    case 1:
      mths =  "January";break;
    case 2:
      mths =  "February";break;
    case 3:
      mths =  "April";break;
    case 4:
      mths =  "March";break;
    case 5:
      mths =  "May";break;
    case 6:
      mths =  "June";break;
    case 7:
      mths =  "July";break;
    case 8:
      mths =  "August";break;
    case 9:
      mths =  "September";break;
    case 10:
      mths =  "October";break;
    case 11:
      mths =  "November";break;
    case 12:
      mths =  "December";break;
  }
  return mths;
};

function Birthday() {
  // const state = useSelector(state => state);
  // console.log(Object.values(state.list));
  const curMonth = new Date().getUTCMonth();
  const [elements, setelements] = useState([]);
  let elem = [];
  let mnths = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
  };
  store.subscribe(async () => {
    let newStore = await store.getState();
    let listVals = Object.values(newStore.list);
    let stateVals = Object.values(newStore.selected);
    elem = [];
    listVals.map((el) =>
      el.map((el1) =>
        stateVals.map((el2) => (el2 === el1["id"] ? elem.push(el1) : ""))
      )
    );
    setelements(
      elem.sort(( a, b ) =>{
        if ( a["dob"].split("-")[1] < b["dob"].split("-")[1] ){
          return -1;
        }
        if ( a["dob"].split("-")[1] > b["dob"].split("-")[1] ){
          return 1;
        }
        return 0;
      }
      ));
    console.log(elem);
  });
  console.log(elements);

  elements.map((el) => {
    console.log(mnths[el["dob"].split("-")[1]]);
    mnths[Number(el["dob"].split("-")[1])].push(el);
  });
//   console.log(mnths);
//   console.log(Object.values(mnths));
  //here
  let prevM = 0;
  return (
    <div>
      <h1>Employees birthday</h1>
      {
      elements.filter(el => el['dob'].split("-")[1]>= curMonth+1).map((el) => {
          
      let dob = el["dob"].split("-");
      let year = dob[0];
      let month = dob[1];
      let day = dob[2].split("T")[0];
      let val = '1';
      if(prevM != month){ val = retMonth(Number(month)); prevM = month; console.log('not') } else {  console.log('uas');val = ''}
      return (<>
          <h4>{val}</h4>
        <p>
          {el["lastName"]} {el["firstName"]} - {day} {month}, {year} year
        </p></>
      );
    })}
    </div>
  );
}

export default Birthday;
