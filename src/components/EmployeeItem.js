import React, { useState, useEffect } from "react";
import { ButtonGroup, Card, Col, Form, InputGroup, Row, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { store } from "../index.js";

function EmployeeItem() {
  console.log("key");
  const startlist = useSelector((state) => state.list);

  const [list, setlist] = useState(startlist);
  const [keys, setkeys] = useState([]);
  const [vals, setvals] = useState([]);
  const [radioValue, setRadioValue] = useState({});

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
  let cnt = 0;
  //   console.log(list.A)

  //   console.log(eList)
  return (
    <>
      {/* {key.map(el=>  */}

      <div>
        <div>
          {vals.map((el1, ind) => {
            return (
              <Card key={cnt++} border="info" style={{ width: "18rem" }}>
                <Card.Header>{keys[ind]}</Card.Header>
                <Card.Body>
                  {el1.map((el2) => {
                    console.log(el2);
                    return (
                      <div key={el2["id"]}>
                        {" "}
                        <Card.Title>
                          {el2["lastName"]} {el2["firstName"]}
                        </Card.Title>
                        <Card.Text>
                         
                          <input type="radio" name={el2['id']} value="not active" id={el2['id']} /> Not active <br />
                          <input type="radio" name={el2['id']} value="active" id={el2['id']} /> Active <br />
                        </Card.Text>
                        <hr />
                      </div>
                    );
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
