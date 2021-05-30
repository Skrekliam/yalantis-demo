import React from "react";
import { useSelector } from "react-redux";
import EmployeeItem from "./EmployeeItem";
import './Employee.css';

function Employees() {
  return (
    <><h1>Employees</h1>
      <div className="container">
        

        <div className="employee-block">{<EmployeeItem />}</div>
        <div className="bday-block">
          Employees birthday
          {/* <EmployeeItem /> */}
        </div>
      </div>
    </>
  );
}

export default Employees;
