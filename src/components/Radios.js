import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "..";
import { addSelect, deleteSelected } from "../actions";

function Radios({ id }) {
  const selected = store.getState().selected;
  const state = selected.indexOf(id) > -1;
  const [checked, setchecked] = useState(
    state === true ? "active" : "not-active"
  );
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    if (!localStorage.getItem("active")) {
      let tmpArr = [];
      tmpArr.push(item);
      // console.log(tmpArr);
      dispatch(addSelect(item));
      localStorage.setItem("active", JSON.stringify(tmpArr));
    } else {
      const ls = JSON.parse(localStorage.getItem("active"));
    //   console.log(ls);
      ls.push(item);
      dispatch(addSelect(item));

      localStorage.setItem("active", JSON.stringify(ls));
    }
  };

  const handleDelete = (item) => {
    if (!localStorage.getItem("active")) {
      alert("Please add item first");
    } else {
      let ls = JSON.parse(localStorage.getItem("active"));
    //   console.log(ls);
      ls = ls.filter((el) => el !== item);
      dispatch(deleteSelected(item));
    //   console.log(ls);
      localStorage.setItem("active", JSON.stringify(ls));
    }
  };
  return (
    <>
      <input
        type="radio"
        name={id}
        value="not active"
        id={id}
        checked={checked === "not-active"}
        onClick={(e) => {
          setchecked("not-active");
          handleDelete(e.target.id);
        }}
      />{" "}
      Not active <br />
      <input
        type="radio"
        name={id}
        value="active"
        id={id}
        checked={checked === "active"}
        onClick={(e) => {
          setchecked("active");
          handleAdd(e.target.id);
        }}
      />{" "}
      Active <br />
    </>
  );
}

export default Radios;
