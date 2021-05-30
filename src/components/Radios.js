import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addSelect} from "../actions"

function Radios({id}) {
    const [checked, setchecked] = useState('not-active');
    const dispatch = useDispatch();
    
    const handleAdd = (item) => {
        if(!localStorage.getItem('active')){
            let tmpArr = [];
            tmpArr.push(item);
            console.log(tmpArr);
            dispatch(addSelect(item));
            localStorage.setItem('active',JSON.stringify(tmpArr));
        } else {
            const ls = JSON.parse(localStorage.getItem('active'));
            console.log(ls);
            ls.push(item);
            dispatch(addSelect(item));

            localStorage.setItem('active',JSON.stringify(ls));
        }
    }

    const handleDelete = (id) => {
        alert('del '+ id)

    }
    return (
    <>
      <input
        type="radio"
        name={id}
        value="not active"
        id={id}
        checked={checked === 'not-active'}
        onClick={(e) => {
            setchecked('not-active');
            handleDelete(e.target.id);
        }}
      />{" "}
      Not active <br />
      <input
        type="radio"
        name={id}
        value="active"
        id={id}
        checked={checked === 'active'}
        onClick={(e) => {
            setchecked('active');
            handleAdd(e.target.id);

        }}
      />{" "}
      Active <br />
    </>
  );
}

export default Radios;
