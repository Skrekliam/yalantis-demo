import React, { useState, useEffect } from "react";
import "./EmployeeItem.css";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index.js";
import Radios from "./Radios";
import { setSelect } from "../actions";

function EmployeeItem() {
  console.log("key");
  const startlist = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [list, setlist] = useState(startlist);
  const [keys, setkeys] = useState([]);
  const [vals, setvals] = useState([]);
  const [selected, setselected] = useState([]);
  
  

  const handleList = () => {
    const newState = store.getState().list;
    const newSelected = store.getState().selected;
    setlist(newState);
    setkeys(Object.keys(list));
    setvals(Object.values(list));
    setselected(newSelected);
    console.log('change');
    console.log(newSelected);
  };
  store.subscribe(handleList);
  console.log(selected);

  let eList = [];
  // console.log(list[keys[0]]);
  // console.log(vals);
  let cnt = 0;
  //   console.log(list.A)

  //   console.log(eList)
  return (
    <>
      {/* {key.map(el=>  */}

      <div className="container">
        {vals.map((el1, ind) => {
          return (
            <div
              className="card"
              key={cnt++}
              border="info"
              style={{ width: "18rem" }}
            >
              <div className="card-header">{keys[ind]}</div>
              <div
                className="card-body"
                style={{
                  maxHeight: "230px",
                  overflowY: "auto",
                }}
              >
                {el1.map((el2) => {
                  // console.log(el1.length==='0' ? 'yas' : 'no');
                  if (el2["lastName"] === "---") {
                    return (
                      <div key={el2["id"]}>
                        {" "}
                        <div className="card-title">{el2["lastName"]}</div>
                      </div>
                    );
                  }
                  return (
                    <div key={el2["id"]}>
                      {" "}
                      <div
                        className={
                          selected.indexOf(el2["id"]) > -1
                            ? "card-title selected"
                            : "card-title"
                        }
                      >
                        {el2["lastName"]} {el2["firstName"]}
                      </div>
                      {}
                      <div className="card-text">
                        <Radios id={el2["id"]} />
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        )
      </div>

      {/* )} */}
    </>
  );
}

export default EmployeeItem;
