import React, { useState, useEffect } from "react";
import "./EmployeeItem.css"
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
                
              <div className="card" key={cnt++} border="info" style={{ width: "18rem" }}>
                <div className="card-header">{keys[ind]}</div>
                <div className="card-body" style={{
      maxHeight: '225px',
      overflowY: 'auto'
     }}>
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
                          <div className="card-title">
                            {el2["lastName"]} {el2["firstName"]}
                          </div>
                          {}
                          <div className="card-text">
                            <input
                              type="radio"
                              name={el2["id"]}
                              value="not active"
                              id={el2["id"]}
                              checked
                            />{" "}
                            Not active <br />
                            <input
                              type="radio"
                              name={el2["id"]}
                              value="active"
                              id={el2["id"]}
                            />{" "}
                            Active <br />
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
