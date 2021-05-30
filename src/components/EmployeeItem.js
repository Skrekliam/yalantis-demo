import React, { useState,useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { store } from '../index.js';

function EmployeeItem() {
  console.log("key");
  const startlist = useSelector((state) => state.list);

  const [list, setlist] = useState(startlist);
  const [keys, setkeys] = useState([]);
  const [vals, setvals] = useState([]);

  const handleList = () => {
    const newState = store.getState().list;
    setlist(newState);
    setkeys(Object.keys(list));
    setvals(Object.values(list));
  };
  store.subscribe(handleList);
  
  let eList = [];
  // console.log(list[keys[0]]);
  console.log(vals);
  let cnt=0;
  //   console.log(list.A)

  //   console.log(eList)
  return (
    <>
      {/* {key.map(el=>  */}

      <div>
        <div>
          {vals.map((el1, ind) => {
            return (
              <Card key={cnt++} border="info" style={{width: '18rem' }}>
                <Card.Header >{keys[ind]}</Card.Header>
                <Card.Body>
               {el1.map(el2 => { console.log(el2); 
                    return (<div key={el2['id']}> <Card.Title >{el2['lastName']} {el2['firstName']}</Card.Title>
                <Card.Text><button>1</button><button>2</button></Card.Text>
               </div>)
                })}
                </Card.Body>
              </Card>
            );
          })}
        </div>
        )
      </div>

      {/* )} */}
    </>
  );
}

export default EmployeeItem;
